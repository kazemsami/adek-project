import { DownOutlined } from "@ant-design/icons";
import Dropdown from "../styled/Dropdown.styled";

export default function SelectList(props) {
	return (
		<div style={props.style} className="loc-wrapper">
			<Dropdown style={{width: props.width}} placeholder="languages">
				{props.title && <option value="" disabled selected hidden>{props.title}</option>}
				{props.options.map(options => (
					<option value="">{options.text}</option>
				))}
			</Dropdown>
			<DownOutlined style={{color: props.arrowColor}} className='dropdown-icon' />
		</div>
	);
}