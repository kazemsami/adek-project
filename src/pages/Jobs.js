import { AppstoreOutlined, SearchOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import JobInfo from '../components/JobInfo';
import SelectList from '../components/SelectList';
import '../styles/Jobs.css'

export default function Jobs()
{
	const test = () => {
		alert('hey');
	}
	return (
		<>
			<div className="job-search">
				<SelectList
				title='Choose Location'
				options={[
					{text: "Abudhabi"},
					{text: "Fujairah"},
					{text: "Ajman"},
					{text: "Dubai"},
					{text: "Al Ain"},
					{text: "Sharjah"},
					{text: "Ras Al Khaima"},
				]} />
				<Divider style={{marginTop: 15, marginLeft:25, height:25}} type="vertical" />
				<SelectList
				title='Choose Job'
				width={125}
				options={[
					{text: "UI Designer"},
					{text: "Software Developer"},
					{text: "Web Developer"},
					{text: "Graphics Designer"},
					{text: "Business Manager"},
				]} />
				<Divider style={{marginTop: 15, marginLeft:25, height:25}} type="vertical" />
				<input className='job-input' placeholder='Search job title here...' />
				<button className='search-button'>
					<p style={{marginLeft: 30, marginTop: 12}}>Search</p> 
					<SearchOutlined style={{fontSize: 25, marginLeft: 20}}/>
				</button>
			</div>
			<div className='job-wrapper'>
				<div className='jobinfo-wrapper'>
					<div className='jobinfo-menu'>
						<div style={{marginLeft: 40, marginTop: 5}}>
							<h4>Showing 20 out of 124 results</h4>
							<p style={{color: 'rgba(0, 0, 0, 0.3)'}}>Based on your preferences</p>
						</div>
						<UnorderedListOutlined style={{marginLeft: 'auto', marginRight:20, marginTop: 14, fontSize: 25, color:'#003CFF'}}/>
						<AppstoreOutlined style={{fontSize: 25, marginRight: 10, marginTop: 14, color:'#003CFF'}}/>
						<SelectList
						title={false}
						arrowColor='rgba(0, 0, 0, 0.2)'
						width={80}
						style={{marginRight: 20}}
						options={[
							{text: "Latest"},
							{text: "Oldest"},
							{text: "Ordered"},
						]} />
					</div>
					<div className='jobinfo-card'>
						<JobInfo title='UI Designer' />
						<JobInfo title='Web Developer' />
						<JobInfo title='Business Manager' />
						<JobInfo title='Graphics Designer' />
					</div>
				</div>
				<div className='job-preview'>
					<div>
						<h3>Job Preview</h3>
					</div>
					<div className='job-prev-box'>
					</div>
				</div>
			</div>
		</>
	);
};