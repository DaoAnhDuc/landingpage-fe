import { useEffect, useRef, useState } from "react";
import { SERVER } from "../App";
import SimpleEditor from "../components/SimpleEditor";
import { toast } from "react-toastify";

const FooterModal = ({ isOpen, onClose, data, fetchData }) => {
  const [newData, setNewData] = useState(data);
  const editorRef = useRef(null);
  const editorRef2 = useRef(null);

  useEffect(() => {
    editorRef.current.innerHTML = data?.description1;
    editorRef2.current.innerHTML = data?.description2;
    return () => {};
  }, []);

  const onChange = (name, value) => {
    setNewData({
      ...newData,
      [name]: value,
    });
  };

  const onChangeAddressItem = (index, value) => {
    const newArr = newData.address.map((item, idx) => (idx === index ? value : item));
    setNewData((prev) => ({
      ...prev,
      address: newArr,
    }));
  };

  const onAddAddress = () => {
    const newArr = [...newData.address, ""];
    setNewData((prev) => ({
      ...prev,
      address: newArr,
    }));
  };

  const onDeleteAddress = (index) => {
    setNewData((prev) => ({
      ...prev,
      address: [...newData.address].filter((_, i) => i !== index),
    }));
  };

  const onUpdate = async () => {
    const res = await SERVER.API.put(`/api/footer`, newData);
    console.log(res);
    if (res.status === 200) {
      toast.success("Update success!");
      fetchData();
      onClose();
    } else {
      toast.error("Error");
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000008a] bg-opacity-50">
      <div className="bg-white w-full  mx-4 rounded-2xl shadow-xl p-6 relative max-h-screen overflow-auto">
        <button className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 cursor-pointer" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--primary-color)]">FOOTER</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <div>
              <div className="font-bold">Address</div>
              {newData.address.map((i, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    className="mt-1 w-full px-4 py-2 border rounded-md focus:border-[var(--primary-color)] border-gray-400 focus:outline-none"
                    value={i}
                    onChange={(e) => {
                      onChangeAddressItem(index, e.target.value);
                    }}
                  />
                  <div>
                    <button className="text-red-500 cursor-pointer border px-2 py-1 rounded" onClick={() => onDeleteAddress(index)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <button className="text-blue-500 cursor-pointer border px-2 py-1 rounded" onClick={onAddAddress}>
                Add new address
              </button>
            </div>
            <div>
              <div className="font-bold">Email</div>
              <input
                className="mt-1 w-full px-4 py-2 border rounded-md focus:border-[var(--primary-color)] border-gray-400 focus:outline-none"
                value={newData?.email}
                onChange={(e) => onChange("email", e.target.value)}
              />
            </div>
            <div>
              <div className="font-bold">Phone</div>
              <input
                className="mt-1 w-full px-4 py-2 border rounded-md focus:border-[var(--primary-color)] border-gray-400 focus:outline-none"
                value={newData?.phone}
                onChange={(e) => onChange("phone", e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <div className="font-bold">Title</div>
              <input
                className="mt-1 w-full px-4 py-2 border rounded-md focus:border-[var(--primary-color)] border-gray-400 focus:outline-none"
                value={newData?.title1}
                onChange={(e) => onChange("title1", e.target.value)}
              />
            </div>
            <div>
              <div className="font-bold">Description</div>
              <SimpleEditor
                editorRef={editorRef}
                onChange={(v) => {
                  onChange("description1", v);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <div className="font-bold">Title</div>
              <input
                className="mt-1 w-full px-4 py-2 border rounded-md focus:border-[var(--primary-color)] border-gray-400 focus:outline-none"
                value={newData?.title2}
                onChange={(e) => onChange("title2", e.target.value)}
              />
            </div>
            <div>
              <div className="font-bold">Description</div>
              <SimpleEditor
                editorRef={editorRef2}
                onChange={(v) => {
                  onChange("description2", v);
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="font-bold">Copyright</div>
          <input
            className="mt-1 w-full px-4 py-2 border rounded-md focus:border-[var(--primary-color)] border-gray-400 focus:outline-none"
            value={newData?.copyright}
            onChange={(e) => onChange("copyright", e.target.value)}
          />
        </div>
        <button className="py-2 w-full bg-[var(--primary-color)] text-white mt-4" onClick={onUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

export default FooterModal;
