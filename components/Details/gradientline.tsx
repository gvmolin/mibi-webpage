export default function GradientLineComponent (){
    return (
        <hr 
            style={{
                width:"10vw",
                color:"rgb(31, 31, 31)",
                height:"5px",
                borderRadius:"10px",
                border:"none",
                background:"linear-gradient(30deg, rgba(217,200,82,1) 0%, rgba(4,104,85,1) 100%)",
                marginBottom:"2vh",
            }}
        />
    )
}