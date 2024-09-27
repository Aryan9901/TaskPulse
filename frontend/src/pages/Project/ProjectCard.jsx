import { Card, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { DotFilledIcon } from "@radix-ui/react-icons";

export default function ProjectCard() {
  return (
    <Card className="rounded-none bg-background border-t-0 border-l-0 border-r-0 border-b border-secondary px-6 py-3 space-y-0 mb-2 w-full">
      <CardHeader className="py-0 px-0 flex-row items-center gap-3">
        <Typography variant="h2" className="text-lg border-none">
          Project Name
        </Typography>
        <DotFilledIcon className="m-0" style={{ margin: 0 }} />
        <Typography className="text-gray-600 h-fit" variant="p">
          Full Stack
        </Typography>
      </CardHeader>
    </Card>
  );
}
