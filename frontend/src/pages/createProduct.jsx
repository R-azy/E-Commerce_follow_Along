import React, { useState, useEffect } from "react";
import {AiOutlineArrowLeft, AiOutlinePlusCircle} from "react-icons/ai";

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
        // Add more categories as needed
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

    const handleRemoveImage = (e) => {
        e.preventDefault();
        const productData = {
            name,
            description,
            category,
            tags,
            price,
            stock,
            email,
        };
        console.log("Product details",productData);
        alert("Product created successfully");
        setImage([]);
        setPreviewImages([]);
        setName("");
        setDescription("");
        setCategory("");
        setTags("");
        setEmail("");
        setPrice("");
        setStock("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="w-[90%] max-w-[500px] bg-white shadow h-auto rounded-[4px] p-4 mx-auto">
            <div className="flex items-center">
                <AiOutlineArrowLeft size={20} className="cursor-pointer" onClick={() => window.history.back()} />
                <h5 className="text-[24px] font-semibold text-center w-full">Create Product</h5>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label className="pb-1 block">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        value={email}
                        className="w-full p-2 border rounded"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div>
                    <label className="pb-1 block">
                        Name <span className="text-red-500">*</span>
                    </label>
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
                    <label className="pb-1 block">
                        Description <span className="text-red-500">*</span>
                    </label>
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
                    <label className="pb-1 block">
                        Category <span className="text-red-500">*</span>
                    </label>
                    <select
                        className="w-full p-2 border rounded"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Choose a category</option>
                        {categoriesData.map((i) => (
                            <option value={i.title} key={i.title}>
                                {i.title}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mt-4">
                    <label className="pb-1 block">
                        Tags <span className="text-red-500">*</span>
                    </label>
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
                    <label className="pb-1 block">
                        Price <span className="text-red-500">*</span>
                    </label>
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
                    <label className="pb-1 block">
                        Stock <span className="text-red-500">*</span>
                    </label>
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
                    <label className="pb-1 block">
                        Upload Images <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="file"
                        id="upload"
                        className="hidden"
                        multiple
                        onChange={handleImageChange} 
                        required
                    />
                    <label htmlFor="upload" className="cursor-pointer">
                        <AiOutlinePlusCircle size={30} color="#555" />
                    </label>
                </div>




                <div className="mt-4">
                    <button
                        type="submit"
                        className="w-full mt-4 bg-blue-500 text-white p-2 rounded"
                    >
                        Create Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateProduct;