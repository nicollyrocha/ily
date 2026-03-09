import { Timeline } from "../../components/Timeline";

export const Home = () => {
  return (
    <div className="p-8 pt-18 md:pt-8 flex flex-col items-center gap-5">
      <h2 className="text-3xl font-semibold mb-4">Timeline</h2>
      <Timeline />
    </div>
  );
};
