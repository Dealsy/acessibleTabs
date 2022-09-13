type tabContentProps = {
  title: string;
  list: string[];
};

export default function TabContent({ title, list }: tabContentProps) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl text-black font-black mb-10">{title}</h1>
        <ul className="mb-10">
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
