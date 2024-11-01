function App(){
  const items=[
   {id:1,name:'tomato',catagory:'veg'},
    {id:2,name:'chicken',catagory:'non-veg'},
    {id:2,name:'potato',catagory:'veg'},
   {id:2,name:'chelli',catagory:'veg'},
    {id:2,name:'fish',catagory:'non-veg'},
  ];
   const listitem=items.filter (item=>item.catagory=='veg')
    const vegitems=listitem.map((item,id)=>(<li key={item.id}>{item.name}</li>))

    const  list =items.filter(item=>item.catagory=='non-veg')
    const nonvegitems=list.map((item,id)=>(<li key={item.id}>{item.name}</li>))
   
    return(
      <>
      <h1 style={{color:'red'}}> veg items..</h1>
      <ul style={{color:'green'}}>{vegitems}</ul>
  
      <h1 style={{color:'blue'}}> non-veg items..</h1>
      <ul style={{color:'red'}}>{nonvegitems}</ul> 
  
      <h1>food type</h1>
      <p>Statu :{listitem.length==0?"veg items are not available":"items are available"} </p>
  
      <p>Statu :{list.length==0?"non-veg items are not available":"items are available"} </p>
     
      <p>Statu :{items.length==0?"items are not available":"items are available"} </p>
     
      </>
     
    )
  }
  export default App;
