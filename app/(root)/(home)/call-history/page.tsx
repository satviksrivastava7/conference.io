import CallList from "@/components/CallList";

const PreviousPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Call History</h1>
      <h3 className='text-xl font-semibold'>Upcoming Meets</h3>
      <CallList type="upcoming" />
      <h3 className='text-xl font-semibold'>Upcoming Meets</h3>
      <CallList type="ended" />
    </section>
  );
};

export default PreviousPage;
