import React from "react";

const Main = () => {
    const itemList = {
        item1: {
            name: 'Fast Delivery',
            description: 'Fast delivery. ChagoLand always makes sure that your order is delivered to you as quickly as possible. ',
            cost: '9$'
        },
        item2: {
            name: 'Very Fast Delivery',
            description: 'Very Fast delivery. ChagoLand always makes sure that your order is delivered as soon as possible. ',
            cost: '29$'
        },
        item3: {
            name: 'Super Fast Delivery',
            description: 'Super Fast delivery. ChagoLand always makes sure that your order is delivered to you as quickly as possible. ',
            cost: '49$'
        },
        item4: {
            name: 'Safe Delivery',
            description: 'Safe delivery. ChagoLand always makes sure that your order is delivered as safe as possible. ',
            cost: '9$'
        },
        item5: {
            name: 'Very Safe Delivery',
            description: 'Very Safe delivery. In this package, we will package your order in the most secure way possible. This cost extra money tho',
            cost: '29$'
        },
        item6: {
            name: 'Hijack Planes',
            description: 'In this package, you can hijack a plane and fly to your destination. ',
            cost: '1099$'
        },
        item7: {
            name: 'Arab Masks',
            description: 'In this package, we will give you a bag full of arab masks. You can freely use them with your friends.',
            cost: '69$'
        },
        item8: {
            name: 'Backpacks With Bombs',
            description: 'In this package, you will get a backpack full of bombs. You can throw these bags to rapist, pedos and have fun.',
            cost: '109$'
        },
        item9: {
            name: 'Slaves',
            description: 'In this package, you will get a bag full of slaves. You can freely use them with your friends.',
            cost: '0.5$'
        }
    }

    return (
        <main className="grid grid-cols-3 justify-evenly px-[20rem] py-[5rem] gap-20">
            {Object.values(itemList).map((item) => {
                return (
                    <div className="flex flex-col items-center p-10 gap-5 text-center bg-gray-200 rounded-[20px] shadow-[10px_10px_0px_gray]">
                        <h2 className="text-{3.5rem} font-bold font-mono">{item.name}</h2>
                        <p className="text-{2.5rem} font-mono">{item.description}</p>
                        <h3 className="text-{2.5rem} font-mono text italic font-bold">{item.cost}</h3>
                    </div>
                )
            })}
        </main>
    )
}

export default Main;