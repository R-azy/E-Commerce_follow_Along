import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineArrowLeft, AiOutlinePlusCircle } from "react-icons/ai";

const CreateProduct = () => {
    const [image, setImage] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [email, setEmail] = useState("");

    const categoriesData = [
        { title: "Electronics" },
        { title: "Clothing" },
        { title: "Books" },
    ];

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImage((prevImages) => prevImages.concat(files));
        const imagePreviews = files.map((file) => URL.createObjectURL(file));
        setPreviewImages((prevPreviews) => prevPreviews.concat(imagePreviews));
    };

    useEffect(() => {
        return () => {
            previewImages.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [previewImages]);

    const handleRemoveImage = (index) => {
        setImage((prevImages) => prevImages.filter((_, i) => i !== index));
        setPreviewImages((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("tags", tags);
        formData.append("price", price);
        formData.append("stock", stock);
        formData.append("email", email);

        image.forEach((file) => {
            formData.append("image", file);
        });

        try {
            const response = await axios.post("http://localhost:8000/api/products", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.status === 200) {
                alert("Product created successfully!");
                setImage([]);
                setPreviewImages([]);
                setName("");
                setDescription("");
                setCategory("");
                setTags("");
                setEmail("");
                setPrice("");
                setStock("");
            }
        } catch (error) {
            console.error("Error creating product:", error);
            alert("Failed to create product. Please try again.");
        }
    };

    return (
        <div className="w-[90%] max-w-[500px] bg-white shadow h-auto rounded-[4px] p-4 mx-auto">
            <div className="flex items-center">
                <AiOutlineArrowLeft size={20} className="cursor-pointer" onClick={() => window.history.back()} />
                <h5 className="text-[24px] font-semibold text-center w-full">Create Product</h5>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label className="pb-1 block">Email <span className="text-red-500">*</span></label>
                    <input
                        type="email"
                        value={email}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="mt-4">
                    <label className="pb-1 block">Name <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        value={name}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter product name"
                        required
                    />
                </div>

                <div className="mt-4">
                    <label className="pb-1 block">Description <span className="text-red-500">*</span></label>
                    <textarea
                        value={description}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter product description"
                        rows="4"
                        required
                    />
                </div>

                <div className="mt-4">
                    <label className="pb-1 block">Category <span className="text-red-500">*</span></label>
                    <select
                        className="w-full p-2 border rounded"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Choose a category</option>
                        {categoriesData.map((i) => (
                            <option value={i.title} key={i.title}>{i.title}</option>
                        ))}
                    </select>
                </div>

                <div className="mt-4">
                    <label className="pb-1 block">Tags <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        value={tags}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="Enter product tags"
                        required
                    />
                </div>

                <div className="mt-4">
                    <label className="pb-1 block">Price <span className="text-red-500">*</span></label>
                    <input
                        type="number"
                        value={price}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter product price"
                        required
                    />
                </div>

                <div className="mt-4">
                    <label className="pb-1 block">Stock <span className="text-red-500">*</span></label>
                    <input
                        type="number"
                        value={stock}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setStock(e.target.value)}
                        placeholder="Enter product stock"
                        required
                    />
                </div>

                <div className="mt-4">
                    <label className="pb-1 block">Upload Images <span className="text-red-500">*</span></label>
                    <input type="file" id="upload" className="hidden" multiple onChange={handleImageChange} required />
                    <label htmlFor="upload" className="cursor-pointer">
                        <AiOutlinePlusCircle size={30} color="#555" />
                    </label>
                    <div className="mt-2">
                        {previewImages.map((url, index) => (
                            <div key={index} className="inline-block mr-2 relative">
                                <img src={url} alt="Preview" className="w-16 h-16 rounded" />
                                <button onClick={() => handleRemoveImage(index)} className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1">x</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-4">
                    <button type="submit" className="w-full mt-4 bg-blue-500 text-white p-2 rounded">Create Product</button>
                </div>
            </form>
        </div>
    );
};

export default CreateProduct;
