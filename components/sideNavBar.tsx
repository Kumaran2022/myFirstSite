


const SideNavBar = (props:any) => {
    const parentCategory = props.value.parentCategory
    console.log(parentCategory);
    
    return(
        <>
         <div className="card sideNav_card">
        {parentCategory ? parentCategory.map((items:any)=>(
                <div key={items.name}>
                {items.category_name}
                </div>
        )) :""}
                    </div>
                   
        </>
    )
}
export default SideNavBar