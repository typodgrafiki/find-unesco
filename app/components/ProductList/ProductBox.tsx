import Image from "next/image"
import { IUnescoObjestProps } from "@/app/utils/interfaces"

const ProductBox: React.FC<IUnescoObjestProps> = ({
    name,
    category,
    image,
    states_name,
    short_description,
}) => {
    return (
        <>
            <div className="productBox">
                <div className="image">
                    {image ? (
                        <Image
                            src={image}
                            alt={name}
                            width={200}
                            height={100}
                        />    
                    ) : (
                        <div className="blankImage flex">
                            Brak obrazka
                        </div>
                    )}
                    
                </div>
                <div className="caption">
                    <div className="name-container flex flexJustifyBetween">
                        <h3 className="name">{name}</h3>    
                        <div className="reviews flex">
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.13259 0.343392C7.20715 0.19925 7.4133 0.19925 7.48786 0.343392L9.53661 4.3038C9.56575 4.36014 9.61989 4.39931 9.68252 4.40938L14.106 5.12026C14.2672 5.14615 14.3311 5.34376 14.2157 5.45916L11.0594 8.61477C11.0143 8.65993 10.9934 8.72394 11.0032 8.78704L11.6892 13.1838C11.7143 13.3445 11.5473 13.4663 11.4019 13.3934L7.39993 11.385C7.34348 11.3567 7.27697 11.3567 7.22052 11.385L3.21852 13.3934C3.07315 13.4663 2.90613 13.3445 2.9312 13.1838L3.61722 8.78704C3.62706 8.72394 3.60618 8.65993 3.56101 8.61477L0.404761 5.45916C0.289339 5.34376 0.353287 5.14615 0.514434 5.12026L4.93793 4.40938C5.00056 4.39931 5.0547 4.36014 5.08384 4.3038L7.13259 0.343392Z" fill="#202123"/>
                            </svg>
                            4.28
                        </div>
                    </div>
                    <p className="description">{short_description}</p>
                    <ul className="flex labels">
                        <li className="category">{category}</li>
                        {states_name.map((element) => (
                            <li className="country" key={element}>{element}</li>                            
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProductBox
