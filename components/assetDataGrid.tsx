"use client";
import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import AssetAvatar from "./assetAvatar";
import TradeButton from "./tradeButton";


const columns: GridColDef[] = [
  {
    field: "asset",
    headerName: "ASSETS",
    width: 150,
    renderCell: (params: any) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <AssetAvatar src={params.row.imageUrl} alt={params.value} />
        {params.value}
      </div>
    ),
  },
  {
    field: "lastTrade",
    headerName: "LAST TRADE",
    width: 150,
    type: "number",
    renderCell: (params: any) => <span> ${params.value}</span>,
  },
  {
    field: "change24hPercent",
    headerName: "24H %",
    width: 150,
    type: "number",
    renderCell: (params: any) => <span className={`${params.value as number  > 0 ? "text-green-600":"text-red-500"}`}>{params.value}%</span>,
  },
  {
    field: "change24hDecimal",
    headerName: "24H CHANGE",
    width: 150,
    type: "number",
    renderCell: (params: any) => <span className={`${params.value as number  > 0 ? "text-green-600":"text-red-500"}`}>${params.value}</span>,
  },

  {
    field: "more",
    headerName: "More",
    width: 283,
    renderCell: () => <div className="mx-auto ml-3"><TradeButton/></div> ,
  },
];

const AssetDataGrid = () => {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
 
  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const res = await axios.get('/api/crypto-data');
        
        setRows(res.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching assets:', error);
      }
    };

    fetchAssets();
  }, []);

  return (
    <div className="h-100 w-[70%] mx-auto mt-10">
      <DataGrid
       getRowId={(row) => row._id}
        classes={{
          root: "bg-black",
          cell: "text-white",

          columnHeader: "text-white bg-black",
        }}
        rows={rows}
        columns={columns}
        loading = {loading}
      />
    </div>

  );
};

export default AssetDataGrid;
