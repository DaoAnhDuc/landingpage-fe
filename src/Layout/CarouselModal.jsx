import { useRef, useState } from "react";
import ImageViewer from "../components/ImageViewer";
import ReactQuill from "react-quill";
import SimpleEditor from "../components/SimpleEditor";

const CarouselModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;
  const [newData, setNewData] = useState(data);
  const text3Ref = useRef(null);
  const onChange = (name, value) => {
    setNewData({
      ...newData,
      [name]: value,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000008a] bg-opacity-50">
      <div className="bg-white w-full max-w-[680px] mx-4 rounded-2xl shadow-xl p-6 relative max-h-screen overflow-auto">
        <button className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 cursor-pointer" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#08798b]">Banner Home</h2>
        <div className="flex flex-col gap-4">
          <div>
            <div className="font-bold">Text 1</div>
            <input className="mt-1 w-full px-4 py-2 border rounded-md focus:border-[#08798b] border-gray-400 focus:outline-none" value={newData.text1} onChange={(e) => onChange("text1", e.target.value)} />
          </div>
          <div>
            <div className="font-bold">Text 2</div>
            <input className="mt-1 w-full px-4 py-2 border rounded-md focus:border-[#08798b] border-gray-400 focus:outline-none" value={newData.text2} onChange={(e) => onChange("text2", e.target.value)} />
          </div>
          <div>
            <div className="font-bold">Text 3</div>
            <SimpleEditor value={newData.text3} editorRef={text3Ref} />
          </div>
          <label className="flex whitespace-nowrap items-center gap-2">
            <span className="font-bold">Đổi background</span>
            <input
              type="file"
              className="block w-full text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-lg file:border-0
                     file:text-sm file:font-semibold
                     file:bg-blue-50 file:text-[#08798b]
                     hover:file:bg-blue-100
                     mt-2"
            />
          </label>
          <ImageViewer src={data.background} />
        </div>
      </div>
    </div>
  );
};

export default CarouselModal;
