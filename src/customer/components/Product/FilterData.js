    export const color=[
        'White',
        'Black',
        'Red',
        'Marun',
        'Beige',
        'Pink',
        'Green',
        'Black',
        'Yellow',
        
    ]
    export const filters=[
        {
            id:"color",
            name:'Color',
            options:[
                {value:"white",label:'white'},
                {value:"beige",label:'beige'},
                {value:"blue",label:'Blue'},
                {value:"brown",label:'brown'},
                {value:"green",label:'green'},
                {value:"purple",label:'purple'},
                {value:"Yellow",label:'yellow'},
                {value:"black",label:'black'},
            ],
        },
        {
            id:"size",
            name:"Size",
            options:[
                {value:"S",label:'S'},
                {value:"M",label:'M'},
                {value:"L",label:'L'},
            ]
        }
    ];
    export const singleFilter = [
        {
          id: "price",
          name: "Price",
          options: [
            { value: "150-399", label: "$150-$399" },
            { value: "399-999", label: "$399-$999" }, 
            { value: "1000-1999", label: "$1000-$1999" },
            { value: "2000-2999", label: "$2000-$2999" },
            { value: "3000-4999", label: "$3000-$4999" },
          ],
        },
        {
          id: "discount",
          name: "Discount range",
          options: [
            { value: "10", label: "10% and above" },
            { value: "20", label: "20% and above" },
            { value: "30", label: "30% and above" },
            { value: "40", label: "40% and above" },
            { value: "50", label: "50% and above" },
            { value: "60", label: "60% and above" },
            { value: "70", label: "70% and above" },
            { value: "80", label: "80% and above" },
          ],
        },
        { 
          id: "stock",
          name: "Availability",
          options: [
            { value: "In stock", label: "In Stock" },
            { value: "Out of stock", label: "Out of Stock" },
          ],
        },
      ];
      
    
    