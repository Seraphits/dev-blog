import BlogsCard from '@/component/blogcard';
import { NextPage } from 'next';

interface Props {}

const BlogsPage: NextPage<Props> = () => {
  return (
    <div className='mx-auto p-5 max-w-3xl space-y-5' >
      <BlogsCard title='This Blog' desc="This is my description of my blog" />
      <BlogsCard title='This Blog' desc="This is my description of my blog" /> <BlogsCard title='This Blog' desc="This is my description of my blog" />
    </div>
    );
};

export default BlogsPage;
