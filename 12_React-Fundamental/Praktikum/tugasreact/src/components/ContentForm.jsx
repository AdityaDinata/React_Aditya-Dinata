import React from 'react';

const ContentForm = () => {
    return (
        <div className="flex items-center "> 
            <form className="space-y-6 w-full max-w-md" action="#" method="POST" noValidate id="productForm">
                <h4 className="text-xl font-bold mb-4">Detail Product</h4>
                {/* Product Name */}
                <div className="relative">
                    <label htmlFor="productName" className="block mb-2 text-base">Product name</label>
                    <input 
                        type="text" 
                        id="productName" 
                        name="productName" 
                        className="w-full h-9 rounded-md border border-gray-300 p-2 text-black" 
                        placeholder="Please provide a product name" 
                        required 
                    />
                    <p className="mt-1 text-sm text-red-600 hidden" id="nameError">Please provide a product name</p>
                </div>

                {/* Product Category */}
                <div className="relative">
                    <label htmlFor="productCategory" className="block mb-2 text-base">Product Category</label>
                    <select 
                        id="productCategory" 
                        name="productCategory" 
                        className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md text-black" 
                        required
                    >
                        <option value="">Choose...</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                        <option value="3">Category 3</option>
                    </select>
                    <p className="mt-1 text-sm text-red-600 hidden" id="categoryError">Please select a product category</p>
                </div>

                {/* Image Upload */}
                <div>
                    <label htmlFor="productImage" className="block mb-2 text-base">Image of Product</label>
                    <input 
                        type="file" 
                        id="productImage" 
                        name="productImage" 
                        className="block w-full text-blue-600 border border-[#0D6EFD] rounded-lg file:py-2 file:px-4 file:bg-[#0D6EFD] file:text-white file:border-none file:text-sm hover:file:bg-blue-700" 
                        required 
                    />
                    <p className="mt-1 text-sm text-red-600 hidden" id="imageError">Please upload an image</p>
                </div>

                {/* Product Freshness */}
                <div>
                    <label className="block mb-2 text-base">Product Freshness</label>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <input type="radio" name="freshness" id="brandNew" value="Brand New" className="mr-2" required />
                            <label htmlFor="brandNew">Brand New</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" name="freshness" id="secondHand" value="Second Hand" className="mr-2" required />
                            <label htmlFor="secondHand">Second Hand</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" name="freshness" id="refurbished" value="Refurbished" className="mr-2" required />
                            <label htmlFor="refurbished">Refurbished</label>
                        </div>
                    </div>
                    <p className="mt-1 text-sm text-red-600 hidden" id="freshnessError">Please select the product freshness</p>
                </div>

                {/* Additional Description */}
                <div>
                    <label htmlFor="productDescription" className="block mb-2 text-base">Additional Description</label>
                    <textarea 
                        id="productDescription" 
                        name="productDescription" 
                        className="w-full p-2 border border-gray-300 rounded text-black" 
                        rows="3" 
                        required
                    ></textarea>
                    <p className="mt-1 text-sm text-red-600 hidden" id="descriptionError">Please provide a description</p>
                </div>

                {/* Product Price */}
                <div>
                    <label htmlFor="productPrice" className="block mb-2 text-base">Product Price</label>
                    <input 
                        type="number" 
                        id="productPrice" 
                        name="productPrice" 
                        className="w-full p-2 border border-gray-300 rounded-md text-black" 
                        placeholder="$1" 
                        required 
                    />
                    <p className="mt-1 text-sm text-red-600 hidden" id="priceError">Please provide the product price</p>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className="text-white py-2 px-4 rounded w-full hover:bg-blue-600" 
                    style={{ backgroundColor: '#0D6EFD' }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContentForm;
