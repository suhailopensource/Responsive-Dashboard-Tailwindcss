import {
  Card,
  Text,
  Flex,
  Metric,
  CategoryBar,
  BadgeDelta,
  Grid,
} from "@tremor/react";

const categories = [
  {
    title: "Sales",
    metric: "$ 456,000",
  },
  {
    title: "Transactions",
    metric: "89,123",
  },
  {
    title: "Merchants",
    metric: "22",
  },
  {
    title: "Orders",
    metric: "678",
  },
];

export default function Cards3() {
  return (
    <Card className="text-white max-w-lg mx-auto dark:bg-gray-800 ">
      <Card className="dark:bg-gray-800 border-none">
        <Flex>
          <Text className="text-white truncate">Overall Performance Score</Text>
          <BadgeDelta deltaType="moderateIncrease">13.1%</BadgeDelta>
        </Flex>
        <Flex
          justifyContent="start"
          alignItems="baseline"
          className="text-white space-x-1"
        >
          <Metric className="text-white">69</Metric>
          <Text className="text-white">/100</Text>
        </Flex>
        <CategoryBar
          categoryPercentageValues={[10, 25, 45, 20]}
          colors={["emerald", "yellow", "orange", "red"]}
          percentageValue={65}
          tooltip="69%"
          className="text-white mt-2"
        />
      </Card>
      <Grid numColsSm={2} className="text-white mt-4 gap-4">
        {categories.map((item) => (
          <Card key={item.title} className="text-white h-20 dark:bg-gray-800">
            <Metric className="text-white text-xl truncate">
              {item.metric}
            </Metric>
            <Text>{item.title}</Text>
          </Card>
        ))}
      </Grid>
    </Card>
  );
}
