import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
            trim: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        images: [
            {
                url: {
                    type: String,
                    required: true,
                },

                imageKey: {
                    type: String,
                    required: true,
                },
            },
        ],

        shortDescription: {
            type: String,
            required: true,
            trim: true,
        },

        longDescription: {
            type: String,
            required: true,
        },

        specifications: [
            {
                key: {
                    type: String,
                    trim: true,
                },

                value: {
                    type: String,
                    trim: true,
                },
            },
        ],

        metaTitle: {
            type: String,
            trim: true,
        },

        metaDescription: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Product =
    mongoose.models.Product ||
    mongoose.model("Product", productSchema);

export default Product;