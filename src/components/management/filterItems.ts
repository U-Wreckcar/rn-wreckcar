export function filterItems(items:any, query:any, name:string) {
    query = query.toLowerCase();
    console.log(query)
    if(query !== ""){
      return items.filter((item:any)=>
      item[name]?.toString().split(' ').some((word:any)=>
      word.includes(query)
      )
      );
    }else if(query === ""){
      return items;
    }else{
      return items;
    }
  }