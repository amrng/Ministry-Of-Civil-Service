import { Select } from "antd";
import { SearchProps } from "antd/es/input";
import Search from "antd/es/input/Search";

export default function NewsOptions() {
  const handleChange = (value: string) => {
    console.log(value);
  };

  const handleSearch: SearchProps["onSearch"] = (value) => console.log(value);

  return (
    <div className="flex justify-between items-center pb-5 border-b-2">
      <div>
        <Select
          defaultValue="Newest"
          onChange={handleChange}
          options={[
            { value: "Newest", label: "Newest" },
            { value: "Oldest", label: "Oldest" },
          ]}
        />
      </div>
      <div>
        <Search
          className="mt-0 pt-0"
          placeholder="Search text"
          allowClear
          onSearch={handleSearch}
        />
      </div>
    </div>
  );
}
