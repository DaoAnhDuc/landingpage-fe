import { useEffect, useRef, useState } from "react";
import { SERVER } from "../App";
import SimpleEditor from "../components/SimpleEditor";

const OutVisionModal = ({ isOpen, onClose, data, fetchData }) => {
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

  const onDelete = (index) => {
    setNewData((prev) => ({
      ...prev,
      data: [...newData.data].filter((_, i) => i !== index),
    }));
  };

  const onAdd = () => {
    setNewData((prev) => ({
      ...prev,
      data: [
        ...newData.data,
        {
          title: "",
          description: "",
        },
      ],
    }));
  };

  const onUpdate = async () => {
    const res = await SERVER.API.put(`/api/our-vision`, newData);
    console.log(res);
    if (res.status === 200) {
      fetchData();
      onClose();
    } else {
      alert("Error");
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000008a] bg-opacity-50">
      <div className="bg-white w-full max-w-[1080px] mx-4 rounded-2xl shadow-xl p-6 relative max-h-screen overflow-auto">
        <button className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 cursor-pointer" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--primary-color)]">{data.title}</h2>
        <div className="flex gap-10">
          <div className="flex-1/2 flex flex-col gap-4">
            <div>
              <div className="font-bold">Title</div>
              <input
                className="mt-1 w-full px-4 py-2 border rounded-md focus:border-[var(--primary-color)] border-gray-400 focus:outline-none"
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
        <div className="grid grid-cols-3 gap-2 mt-6">
          {newData.data.map((i, index) => (
            <OurVisionItem i={i} key={index} index={index} onChangeItem={onChangeItem} onDelete={onDelete} />
          ))}
          <div>
            <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={onAdd}>
              Add new
            </button>
          </div>
        </div>
        <button className="py-2 w-full bg-[var(--primary-color)] text-white mt-4" onClick={onUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

const OurVisionItem = ({ i, index, onChangeItem, onDelete }) => {
  const editorRef = useRef(null);
  useEffect(() => {
    editorRef.current.innerHTML = i?.description;
    return () => {};
  }, []);

  return (
    <div className="border p-2 border-gray-300">
      <div>
        <div className="font-bold">Title</div>
        <input
          className="mt-1 w-full px-4 py-2 border rounded-md focus:border-[var(--primary-color)] border-gray-400 focus:outline-none"
          value={i?.title}
          onChange={(e) => onChangeItem(index, "title", e.target.value)}
        />
      </div>
      <div className="mt-2">
        <div className="font-bold">Description</div>
        <SimpleEditor
          editorRef={editorRef}
          onChange={(v) => {
            onChangeItem(index, "description", v);
          }}
        />
      </div>
      <div className="flex justify-end mt-2">
        <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => onDelete(index)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default OutVisionModal;
