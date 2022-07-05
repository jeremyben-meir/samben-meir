import background from "./../../src/assets/background.jpg";
const navHeight = "60px";

export const MainDiv = {
    display:"flex",
    width:'100%',
    height:'100%',
    position: "absolute",
    flexDirection:"column",

    fontFamily: "MyFont",
    cursor:"default"
}
export const ScrollDiv = {
    display:"flex",
    width:'100%',
    height:'100%',
    flexDirection:"column",
    overflow:"scroll",
    marginBottom:navHeight,
    // border:"solid red 10px"
}

export const NavDiv = {
    display:"flex",
    width:"100%",
    height:"25%",
    minHeight:"25%",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign:"center",
}

export const SubNavDiv = {
    display:"flex",
    flex:"1",
    height:"100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    boxSizing:"border-box",
    padding:"0px 20px 0px 20px",
    cursor:"pointer",
    // border:"solid purple"
}

export const TextDiv = {
    display:"flex",
    flex:"9",
    height:"100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}

export const ImgDiv = (wide) => ({
    display:"flex",
    width:"100%",
    height:"75%",
    minHeight:"75%",
    flexDirection:wide ? "row" : "column",
    // border:"solid green 1px"
})

export const SubImgDiv = {
    display:"flex",
    flex:"2",
    alignItems:"center",
    overflow:"hidden",
    minWidth:"50%",
    // border:"solid red"
}

export const SubImgDiv2 = {
    display:"flex",
    flex:"1",
    flexDirection:"row",
    fontSize: "13px",
    justifyContent:"center",
    alignItems:"center",
    padding:"30px",
    boxSizing:"border-box",
    minWidth:"50%",
    // border:"solid red"
}

export const ImgStyle = {
    width:"100%",
    height:"100%",
    objectFit: "cover",
    objectPosition:"top"
}

export const HeaderDiv = {
    fontSize: "50px",
    fontWeight: "bold",
    // border:"solid green"
}

export const SubHeaderDiv = {
    fontSize: "20px",
    fontWeight: "normal",
    // border:"solid red"
}

export const PopupStyle = {
    display:"flex",
    flexDirection:"row",
    backgroundColor:"white",
    borderRadius:"10px",
    boxSizing:"border-box",
    padding:"30px",
    alignItems:"center",
    gap:"20px",
}

export const SubPopupStyle = {
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    justifyContent:"center",
    gap:"10px",
}

export const ContactImgStyle = {
    width:"100px",
    height:"100px",
    objectFit: "cover",
    borderRadius:"50px"
}

export const BottomNav = {
    display:"flex",
    flexDirection:"row",
    position:"fixed",
    backgroundColor:"white",
    width: "100%",
    height:navHeight,
    bottom:"0",
    boxShadow:"0px 0px 6px 2px rgba(0, 0, 0, .2)",
    justifyContent:"center",
    alignItems:"center",
    gap:"20px"
}

export const SocialImg = {
    height:"20px",
    width:"20px",
    cursor:"pointer",
}

export const MusicDiv = (wide) => ({
    display:"flex",
    flexDirection:"row",
    width:"100%",
    boxSizing:"border-box",
    padding:wide?"40px":"0px 40px 40px 40px", 
    gap:"40px"
})

export const SubMusicDiv = {
    flex:"1",
    height: "250px",
}