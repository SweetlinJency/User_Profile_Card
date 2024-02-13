import PropTypes from "prop-types"
const UserData = [
    {
        name:"Sweetlin Jency",
        city:"Chennai",
        description:"Front End Developer",
        skills:["UI / UX","Frond End Developer","HTML","CSS","Javascript","Bootstrap","React","Node"],
        online:true,
        profile:"images/1.jpg"
    },
    {
        name:"Joe Pravin",
        city:"Bangalore",
        description:"Full Stack Developer",
        skills:["Python","HTML","CSS","Javascript","Bootstrap","Flask","Angular js","Oracle MySQL"],
        online:true,
        profile:"images/2.jpg"
    },
    {
        name:"Robert",
        city:"New York",
        description:"Mobile App Developer",
        skills:["Java","SDK","Objective C","React Native","HTML","CSS","Javascript"],
        online:false,
        profile:"images/3.jpeg"
    },
    {
        name:"Benny",
        city:"Bangaloru",
        description:"Wordpress Developer",
        skills:["Git","Wordpress","PHP","React","HTML","CSS","Javascript","SEO"],
        online:true,
        profile:"images/4.webp"
    },
    {
        name:"Leffina",
        city:"USA",
        description:"Laravel Software Developer",
        skills:["Laravel","Figma","Web development","PHP","HTML","CSS","Javascript","Bootstrp"],
        online:false,
        profile:"images/5.jpg"
    },
    {
        name:"Joseph",
        city:"Kerala",
        description:"SQL Programmer",
        skills:["UNIX","Sybase","Shell Scripting","SQL","Oracle","Crystal Reports"],
        online:false,
        profile:"images/6.jpeg"
    },
    {
        name:"Harry",
        city:"California",
        description:"Mobile App Developer",
        skills:["Java","SDK","Objective C","React Native","HTML","CSS","Javascript"],
        online:true,
        profile:"images/7.jpeg"
    },
    {
        name:"Smith",
        city:"Paris",
        description:"Software Developer",
        skills:["JQuery","SCSS","SASS","MySQL","HTML","CSS","Javascript","Databases","Data Structures"],
        online:false,
        profile:"images/8.jpeg"
    },
    {
        name:"Leena",
        city:"San Francisco",
        description:"Angular Developer",
        skills:["HTML","CSS","Javascript","Bootstrap","Angular","Rest API"],
        online:true,
        profile:"images/9.jpg"
    },
]

function User(props){
    return(
        <div className="card-container">
            <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
            <img src={props.profile} className={props.online ? "img img-online" : "img img-offline"} alt="user" />
            <h3 className="names">{props.name}</h3> 
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                   {props.skills.map((skills,index)=>(
                        <li key={index}>{skills}</li>
                   ))}
                </ul>
            </div>
        </div>
    );
}

const UserCard = () => {
    return(
       <>
        {
            UserData.map((user,index)=>(
                <User
                    key={index} 
                    name={user.name} 
                    city={user.city} 
                    description={user.description} 
                    skills={user.skills}
                    online={user.online}
                    profile={user.profile}
                />
            ))
        }
       </>
    )
}

export default UserCard;

User.prototype={
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    description:PropTypes.arrayOf(PropTypes.string).isRequired,
    skills:PropTypes.string.isRequired,
    online:PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired,
}