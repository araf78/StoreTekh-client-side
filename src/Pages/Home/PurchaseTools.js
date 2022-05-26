import React from 'react';
import Tool from './Tool'

const PurchaseTools = () => {
    const tools = [
        {
          "id": "628f0184eba6debf13b8aeb9",
          "name": "REMEDIAS fd650",
          "img": "https://htmldemo.net/jantrik/jantrik/img/products/5.jpg",
          "minOrderQuantity": 26,
          "availableQuantity": 32,
          "price": "$2,961.06",
          "description": "Non amet ea proident sit sint pariatur cillum pariatur. Aliqua aliquip sunt aute magna eiusmod sint culpa ut sit.\r\n"
        },
        {
          "id": "628f01847d8fe99fbb0b1d4e",
          "name": "DEWALT Honda GX270",
          "img": "https://htmldemo.net/jantrik/jantrik/img/products/1.jpg",
          "minOrderQuantity": 25,
          "availableQuantity": 27,
          "price": "$3,369.60",
          "description": "Labore sint ea exercitation veniam eu labore adipisicing. Incididunt excepteur incididunt adipisicing.\r\n"
        },
        {
          "id": "628f0184b6d9ed183899bc2f",
          "name": "RYOBI RBL30MBA",
          "img": "https://htmldemo.net/jantrik/jantrik/img/products/7.jpg",
          "minOrderQuantity": 24,
          "availableQuantity": 36,
          "price": "$2,163.63",
          "description": "Reprehenderit dolore aliqua proident sunt exercitation eiusmod mollit consectetur ut voluptate. \r\n"
        },
        {
          "id": "628f0184bc71fbcbc2382029",
          "name": "DeWalt Dust Extractor",
          "img": "https://htmldemo.net/jantrik/jantrik/img/products/2.jpg",
          "minOrderQuantity": 21,
          "availableQuantity": 39,
          "price": "$1,978.47",
          "description": "Minim sint do voluptate officia. Laboris deserunt veniam minim pariatur nostrud fugiat. \r\n"
        },
        {
          "id": "628f0184e3a456d02fbb0b91",
          "name": "Lithium Cordless",
          "img": "https://htmldemo.net/jantrik/jantrik/img/products/4.jpg",
          "minOrderQuantity": 21,
          "availableQuantity": 28,
          "price": "$2,871.12",
          "description": "Aliqua elit proident aliqua laborum dolor nulla amet in tempor. Esse veniam amet nostrud ut eiusmod dolor.\r\n"
        },
        {
          "id": "628f0184f0b641c2dbb29520",
          "name": "Beam Line Leaser",
          "img": "https://htmldemo.net/jantrik/jantrik/img/products/3.jpg",
          "minOrderQuantity": 30,
          "availableQuantity": 39,
          "price": "$1,565.84",
          "description": "In magna consectetur ullamco voluptate sunt sint eu magna nulla ad reprehenderit deserunt sunt labore.\r\n"
        }
      ]
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-5 sm:justify-items-center'>
            {
                tools.map(tool => <Tool
                key={tool.id}
                tool={tool}
                ></Tool>)
            }                                                                                                                               
        </div>
    );
};

export default PurchaseTools;