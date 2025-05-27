import { useEffect, useRef, useState } from "react";
import { SERVER } from "../App";
import SimpleEditor from "../components/SimpleEditor";
import { toast } from "react-toastify";

const ContactUsModal = ({ isOpen, onClose, data, fetchData }) => {
  const [newData, setNewData] = useState(data);
  const editorRef = useRef(null);

  useEffect(() => {
    editorRef.current.innerHTML = data?.description;
    return () => {};
  }, []);

  const onChange = (name, value) => {
    setNewData({
      ...newData,
      [name]: value,
    });
  };

  const onChangeItem = (index, name, value) => {
    const newArr = newData.data.map((item, idx) => (idx === index ? { ...item, [name]: value } : item));
    setNewData((prev) => ({
      ...prev,
      data: newArr,
    }));
  };

  const onDeleteAddress = (index) => {
    setNewData((prev) => ({
      ...prev,
      data: [...newData.data].filter((_, i) => i !== index),
    }));
  };

  const onAddAddress = () => {
    setNewData((prev) => ({
      ...prev,
      data: [
        ...newData.data,
        {
          name: "",
          address: "",
          email: "",
          hotline: "",
          fax: "",
          link: "",
        },
      ],
    }));
  };

  const onUpdate = async () => {
    const res = await SERVER.API.put(`/api/contact-us`, newData);
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
      <div className="bg-white w-full max-w-[1080px] mx-4 rounded-2xl shadow-xl p-6 relative max-h-screen overflow-auto">
        <button className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 cursor-pointer" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#08798b]">{data.title}</h2>
        <div className="flex gap-10">
          <div className="flex-1/2 flex flex-col gap-4">
            <div>
              <div className="font-bold">Title</div>
              <input
                className="mt-1 w-full px-4 py-2 border rounded-md focus:border-[#08798b] border-gray-400 focus:outline-none"
                value={newData?.title}
                onChange={(e) => onChange("title", e.target.value)}
              />
            </div>
            <div>
              <div className="font-bold">Description</div>
              <SimpleEditor
                editorRef={editorRef}
                onChange={(v) => {
                  onChange("description", v);
                }}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-6">
          {newData.data.map((i, index) => (
            <ProductListItem i={i} key={index} index={index} onChangeItem={onChangeItem} onDeleteAddress={onDeleteAddress} />
          ))}
          <div>
            <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={onAddAddress}>
              Add new address
            </button>
          </div>
        </div>
        <button className="py-2 w-full bg-[#08798b] text-white mt-4" onClick={onUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

const ProductListItem = ({ i, index, onChangeItem, onDeleteAddress }) => {
  return (
    <div className="border p-2 border-gray-300 flex flex-col gap-2">
      <div>
        <div className="font-bold">Name</div>
        <input
          className="mt-1 w-full px-4 py-2 border rounded-md focus:border-[#08798b] border-gray-400 focus:outline-none"
          value={i?.name}
          onChange={(e) => onChangeItem(index, "name", e.target.value)}
        />
      </div>
      <div>
        <div className="font-bold">Address</div>
        <input
          className="mt-1 w-full px-4 py-2 border rounded-md focus:border-[#08798b] border-gray-400 focus:outline-none"
          value={i?.address}
          onChange={(e) => onChangeItem(index, "address", e.target.value)}
        />
      </div>
      <div>
        <div className="font-bold">Email</div>
        <input
          className="mt-1 w-full px-4 py-2 border rounded-md focus:border-[#08798b] border-gray-400 focus:outline-none"
          value={i?.email}
          onChange={(e) => onChangeItem(index, "email", e.target.value)}
        />
      </div>
      <div>
        <div className="font-bold">Hotline</div>
        <input
          className="mt-1 w-full px-4 py-2 border rounded-md focus:border-[#08798b] border-gray-400 focus:outline-none"
          value={i?.hotline}
          onChange={(e) => onChangeItem(index, "hotline", e.target.value)}
        />
      </div>
      <div>
        <div className="font-bold">Fax</div>
        <input
          className="mt-1 w-full px-4 py-2 border rounded-md focus:border-[#08798b] border-gray-400 focus:outline-none"
          value={i?.fax}
          onChange={(e) => onChangeItem(index, "fax", e.target.value)}
        />
      </div>
      <div>
        <div className="font-bold">GoogleMap Share Link</div>
        <input
          className="mt-1 w-full px-4 py-2 border rounded-md focus:border-[#08798b] border-gray-400 focus:outline-none"
          value={i?.link}
          onChange={(e) => onChangeItem(index, "link", e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => onDeleteAddress(index)}>
          Delete address
        </button>
      </div>
    </div>
  );
};

export default ContactUsModal;
