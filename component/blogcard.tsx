import { NextPage } from 'next';

interface Props {
  title: string;
  desc: string;
}

const BlogsCard: NextPage<Props> = ({title, desc}) => {
  return (
      <div className='bg-green-100 p-2'>
        <h1 className='text-3xl text-gray-900'>{title}</h1>
        <p className='text-gray-500'>{desc}</p>
      </div>
    );
};

export default BlogsCard;
