import React from "react";
import PageHeader from "../../components/PageHead/page";
import Footer from '../../components/footer/page';
export default function page() {
  const data = [
    { id: 1687315664863, name: "John Doe", age: 30 },
    { id: 299486184961, name: "Jane Smith", age: 25 },
    { id: 329948618496, name: "David Johnson", age: 40 },
    { id: 429948618496, name: "Emily Brown", age: 35 },
    { id: 529948618496, name: "Michael Wilson", age: 28 },
    { id: 629948618496, name: "Sarah Davis", age: 32 },
    { id: 729948618496, name: "James Miller", age: 45 },
    { id: 829948618496, name: "Anna Thompson", age: 29 },
    { id: 929948618496, name: "Robert Martinez", age: 38 },
    { id: 1029948618496, name: "Linda Anderson", age: 33 },
  ];
  return (
    <div>
      <PageHeader tab={"Programs"} nestedTab={"B.Com Account and Finance"} />
      <div className="content p-2">
        <div className="section1">
          <h1 className="text-2xl font-bold mt-4">About the course - {"B.Com Account and Finance"}</h1>
          <hr className="w-9/12 border-t-2 border-gray-400 mb-4 mt-4" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            nostrum officiis aut iure minima quisquam, expedita laboriosam,
            accusamus magnam consequatur non dolor at vitae voluptates beatae
            sed labore, nam blanditiis? A, fugit. Excepturi nesciunt illo
            eveniet vero! Non a, ut eos distinctio voluptas magni perferendis
            magnam asperiores doloremque dolorum at enim ipsa, nesciunt
            molestias, harum adipisci expedita saepe autem mollitia.
          </p>
          <br />
          <button className="bg-marronDark text-white px-6 py-2 rounded-full">Inquire Now</button>
        </div>
        <div className="section2 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="left">
            <h2 className="text-xl font-bold">Vision</h2>
            <hr className="w-9/12 border-t-2 border-gray-400 mb-4 mt-4" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              eum? Quod, accusantium aliquid? Delectus atque ullam perspiciatis
              sapiente. Perferendis rerum quidem asperiores nostrum repellendus
              sapiente repudiandae fugiat in ea reiciendis?
            </p>
          </div>
          <div className="right">
            <h2 className="text-xl font-bold">Mission</h2>
            <hr className="w-9/12 border-t-2 border-gray-400 mb-4" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              pariatur dolor perspiciatis repellat ratione est nam voluptatum,
              earum esse impedit deserunt. Rerum quaerat nam natus soluta
              explicabo quod dolorem ipsum?
            </p>
          </div>
        </div>
        <div className="section3 mt-10 mb-8">
          <h1 className="font-semibold text-lg">List of Subjects for the Three Year B.Com Account and Finance</h1>
          <hr className="w-9/12 border-t-2 border-gray-400 mb-4" />
          <div className="subjects bg-mapBg">
            <div className="fy">
              <h1 className="flex justify-center text-2xl font-bold" >FY B.Com Account and Finance</h1>
              <div className="subjects max-w-screen-md mx-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="px-2 py-2">Semester I</th>
                      <th className="px-2 py-2">Semester II</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td className="border border-black px-2 py-2">{item.id}</td>
                        <td className="border border-black px-2 py-2">{item.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="sy">
              <h1 className="flex justify-center text-2xl font-bold mt-4" >SY B.Com Account and Finance</h1>
              <div className="subjects max-w-screen-md mx-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="px-2 py-2">Semester III</th>
                      <th className="px-2 py-2">Semester IV</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td className="border border-black px-2 py-2">{item.id}</td>
                        <td className="border border-black px-2 py-2">{item.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="ty">
              <h1 className="flex justify-center text-2xl font-bold mt-4" >TY B.Com Account and Finance</h1>
              <div className="subjects max-w-screen-md mx-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="px-2 py-2">Semester V</th>
                      <th className="px-2 py-2">Semester VI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td className="border border-black px-2 py-2">{item.id}</td>
                        <td className="border border-black px-2 py-2">{item.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
}
