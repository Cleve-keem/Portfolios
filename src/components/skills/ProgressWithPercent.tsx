import { Progress } from "../ui/progress";

export default function ProgressWithPercent({
  level,
  inView,
}: {
  level: number;
  inView: boolean;
}) {
  return (
    <Progress value={level} className={`max-w-sm ${inView ? "w-full" : ""}`} />
  );
}
