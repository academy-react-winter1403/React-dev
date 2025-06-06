import StatsHorizontal from "@components/widgets/stats/StatsHorizontal";
import { User, UserPlus, UserCheck, UserX } from "react-feather";
import { Col } from "reactstrap";

const UsersReport = () => {
  const userReport = [
    {
      title: "کل کاربران",
      color: "primary",
      stats: "dcsdvsfvsfv",
      icon: User,
    },
    {
      title: "ادمین ها",
      color: "danger",
      stats: "skfjvlfvjksfhbv",
      icon: UserPlus,
    },
    {
      title: "اساتید",
      color: "success",
      stats: "osfjvklsfvjfsv",
      icon: UserCheck,
    },
    {
      title: "دانشجویان",
      color: "warning",
      stats: "jgdcgqhvhjfvghfj",
      icon: UserX,
    },
  ];

  return (
    <>
      {userReport.map((item, index) => {
        return (
          <Col lg="3" sm="6" key={index}>
            <StatsHorizontal
              color={item.color}
              statTitle={item.title}
              icon={<item.icon size={20} />}
              renderStats={<h3 className="fw-bolder mb-75">{item.stats}</h3>}
            />
          </Col>
        );
      })}
    </>
  );
};

export default UsersReport;
