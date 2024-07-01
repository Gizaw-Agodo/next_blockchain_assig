import Image from 'next/image';
import React from 'react';

interface AssetAvatarProps {
  src: string;
  alt: string;
}

const AssetAvatar: React.FC<AssetAvatarProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={100}  height = {100} className="w-8 h-8 rounded-full mr-2" />;
};

export default AssetAvatar;
