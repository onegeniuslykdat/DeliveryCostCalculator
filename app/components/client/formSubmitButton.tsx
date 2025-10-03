'use client';

import { useState } from "react";
import ResultPanel from "./resultPanel";

interface IButtonProps {
    formId: string
}

export default function FormSubmitButton(props: IButtonProps) {
    const [deliveryCost, setDeliveryCost] = useState(0);

    const onButtonClick = (formId: string) => {

        const form = document.getElementById(formId);
        //data
        const formData = Object.fromEntries(new FormData(form as HTMLFormElement).entries());
        const originAddressLine: string = formData.originAddress.toString();
        const originSuburb: string = formData.originSuburb.toString();
        const originPostcode: string = formData.originPostcode.toString();
        const originState: string = formData.originState.toString();
        const destinationState: string = formData.destinationState.toString();
        const destinationAddressLine: string = formData.destinationAddress.toString();
        const destinationSuburb: string = formData.destinationSuburb.toString();
        const destinationPostcode: string = formData.destinationPostcode.toString();
        const distanceImportance: number = Number.parseInt(formData.distanceImportance.toString())
        const timeImportance: number = Number.parseInt(formData.timeImportance.toString())


        // get address from customer
        const OriginAddress: string = `${originAddressLine} ${originSuburb} ${originState} ${originPostcode}`;
        const DestinationAddress: string = `${destinationAddressLine} ${destinationSuburb} ${destinationState} ${destinationPostcode}`
        const fullMapsAPIUrl = `https://distanceandtimecalc-d8f5d7c8ged8b6hm.australiaeast-01.azurewebsites.net/api/GetDistanceMatrix?`;

        fetch(fullMapsAPIUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                destinations: DestinationAddress,
                origins: OriginAddress
            })
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                const distance = data.distance.value / 1000;
                const time = data.duration.value / 60;
                const deliveryCostPerdistance: number = 0.3;
                const deliveryCostPerTime: number = 0.2;

                // set delivery cost
                const cost = (distanceImportance * deliveryCostPerdistance * distance) + (timeImportance * deliveryCostPerTime * time);
                setDeliveryCost(parseFloat(cost.toFixed(2)));
            })
            .catch((err) => {
                console.log(err);
            })

    }

    return (
        <div>
            <ResultPanel result={
                {
                    isSuccess: !isNaN(deliveryCost),
                    data: !isNaN(deliveryCost) ? `Delivery Cost: $${deliveryCost}` : "",
                    error: !isNaN(deliveryCost) ? "" : "Something went wrong"
                }
            } />
            <br />
            <button onClick={(e) => { onButtonClick(props.formId); e.preventDefault(); }} className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Submit</button>
        </div>

    );
}