/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';

interface VideoPlayerProps {
  thumbnail_url: string;
  thumbnail_alt_text: string;
  video_url: string;
}

const VideoPlayer = ({ thumbnail_url, thumbnail_alt_text, video_url }: VideoPlayerProps) => {
  return (
    <div className='w-full aspect-video h-full max-h-[75vh]'>
      <Image src={thumbnail_url} alt={thumbnail_alt_text} width={300} height={300} className='w-full h-full object-cover rounded-lg' />
    </div>
  );
};

export default VideoPlayer;
