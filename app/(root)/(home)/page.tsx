import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(
    now,
  );

  return (
    <section className="flex size-full flex-col gap-5 text-white align-center justify-center">
      <div className="h-[315px] w-full rounded-sm bg-hero bg-cover hover:border hover:border-gradient-start">
        <div className="flex h-full flex-col justify-between p-4 md:p-8 lg:p-12">
          <h2 className="glassmorphism text-md lg:text-lg max-w-[350px] text-lg text-gradient-start font-medium rounded py-2 text-center">
            4 meetings scheduled for this week
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold text-center text-whute lg:text-7xl max-w-[350px]">
              {time}
            </h1>
            <p className="glassmorphism text-center max-w-[350px] text-lg font-medium text-gradient-start py-2 rounded lg:text-xl">
              {date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
