import { Typography } from "antd";
import Card from "../styled/Card.styled";

export default function JobInfo(props) {
	return (
		<Card>
			<Typography.Title>{props.title}</Typography.Title>
		</Card>
	);
}