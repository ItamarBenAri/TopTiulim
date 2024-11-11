/**
 * Gallery Items Slice
 * ---------------------
 * This Redux slice manages the state for gallery items in the application, allowing for initialization
 * and updating of the gallery items state.
 * 
 * Imports:
 * - `PayloadAction` and `createSlice` from Redux Toolkit: Used to define the slice and action payload type.
 * - `GalleryItemModel`: Represents individual gallery items, such as images or media displayed in a gallery.
 */

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import GalleryItemModel from "../Models/GalleryItemModel";

/**
 * initAll Function
 * -----------------
 * Reducer function that initializes the gallery items state with a given array of `GalleryItemModel` objects.
 * 
 * Parameters:
 * - `currentState`: The current state of gallery items, typically an array of `GalleryItemModel`.
 * - `action`: Redux action containing the payload, which is an array of `GalleryItemModel` items to set in the state.
 * 
 * Returns:
 * - An array of `GalleryItemModel` items, effectively replacing the current state with the payload.
 */
function initAll(currentState: GalleryItemModel[], action: PayloadAction<GalleryItemModel[]>): GalleryItemModel[] {
    const allRecommendations = action.payload;
    return allRecommendations;
}

/**
 * galleryItemsSlice
 * --------------------
 * Creates a Redux slice to manage gallery items within the application state.
 * 
 * Properties:
 * - `name`: Specifies the slice name as "galleryItems".
 * - `initialState`: Sets the initial state as an empty array, representing no gallery items initially.
 * - `reducers`: Defines reducer functions for the slice, currently including only `initAll`.
 */
const galleryItemsSlice = createSlice({
    name: "galleryItems",           // Slice name used in Redux
    initialState: [],               // Initial state as an empty array for gallery items
    reducers: { initAll }           // Reducers included in the slice, with `initAll` for initialization
});

/**
 * galleryItemsActionCreators
 * -----------------------------
 * Exports action creators generated by Redux Toolkit for the gallery items slice.
 */
export const galleryItemsActionCreators = galleryItemsSlice.actions;

/**
 * galleryItemsReducersContainer
 * -------------------------------
 * Exports the reducer function for this slice, allowing it to be included in the Redux store.
 */
export const galleryItemsReducersContainer = galleryItemsSlice.reducer;