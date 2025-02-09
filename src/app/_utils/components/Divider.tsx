export default function Divider() {
    return (
        <div className="container ">
            <div className="w-full h-[3px]" style={{
                borderImageSource: "radial-gradient(45.56% 45.56% at 50.35% 6%, rgba(47, 109, 211, 0.71) 0%, #FFFFFF 100%)",
                borderImageSlice: 1,
                borderImageWidth: "2px",
            }} />
        </div>
    )
}