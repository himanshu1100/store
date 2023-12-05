function Page(props) {
  console.log(props.src);
  return (
    <>
      <div className="flex w-screen justify-evenly">
        <div className="flex ">
            <div className="flex flex-col justify-evenly">

            </div>
        <img src={props.src} alt="" />
        </div>
        <div className="flex flex-col w-1/2 justify-evenly ">
          <div>
            <h1>{props.name}</h1>
            <h2>{props.category}</h2>
            <h2>{props.price}</h2>
          </div>
          <div >
            <button>Wishlist</button>
            <button className=" mx-3">Add to bag</button>
          </div>

          <p>
            <h1> About the product</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis amet, ducimus voluptate molestiae aut earum? Ab
            laudantium officia neque quia delectus doloribus rerum tenetur, a
            sint facilis repudiandae, odit perferendis!
          </p>
        </div>
      </div>
    </>
  );
}

export default Page;
