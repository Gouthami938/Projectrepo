import CustomNavbarUD from "./CustomNavbarUD";

const Base=({title="welcome to website",children})=>{
    return(
        <div className="container-fluid">
            <CustomNavbarUD/>
            {children}
           

        </div>
    );
};
export default Base;