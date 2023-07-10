import React from "react";
import { Form } from "react-bootstrap";

export default function SidebarFilter() {
    const filters = [
        {
            name: "Brands",
            data: ["HP", "Dell", "Lenovo", "Samsung", "Sony", "Apple"]
        },
        {
            name: "Price range",
            data: ["0 to 20,000", "20,000 to 50,000", "50,000 to 1 Lakh"]
        },
        {
            name: "Color",
            data: ["White", "Black"]
        }
    ]
    return (
        <div className="sidebarFilter">
            {filters.map((opt, i) => {
                return (
                    <div className="mb-4" key={i}>
                        <h4>{opt?.name}</h4>
                        {opt.data.map((data, ind) => {
                            return (
                                <Form.Group className="mb-0" key={ind}>
                                    <Form.Check
                                        type={"checkbox"}
                                        id={`default-${ind}`}
                                        label={data}
                                        name={opt.name}
                                    />
                                </Form.Group>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}