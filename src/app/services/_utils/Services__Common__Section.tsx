import Common__R from "./Common__R";
import Common___L from "./Common___L";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Services__Common__Section({ data }: { data: any }) {

    return (
        <>
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data?.map((item: any, idx: any) => (
                    (idx + 1) % 2 !== 0 ? (
                        <Common__R item={item} key={idx} />
                    ) : (
                        <Common___L item={item} key={idx} />    
                    )
                ))
            }

        </>
    )
}