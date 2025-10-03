import Button from "./client/formSubmitButton";

export default function Form() {
    const formId = "calculateForm";

    return (
        <form id={formId} className="bg-white w-full max-w-4xl p-6 sm:p-8 rounded-lg shadow-md space-y-8">
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">Origin</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 md:col-span-2">
                        <label htmlFor="originAddress" className="block text-sm font-medium text-gray-700 mb-1">Address Line</label>
                        <input type="text" id="originAddress" name="originAddress" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="originSuburb" className="block text-sm font-medium text-gray-700 mb-1">Suburb</label>
                        <input type="text" id="originSuburb" name="originSuburb" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="originPostcode" className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
                        <input type="text" id="originPostcode" name="originPostcode" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label htmlFor="originState" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                        <select id="originState" name="originState" required className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="NSW">New South Wales</option>
                            <option value="VIC">Victoria</option>
                            <option value="QLD">Queensland</option>
                            <option value="WA">Western Australia</option>
                            <option value="SA">South Australia</option>
                            <option value="TAS">Tasmania</option>
                            <option value="ACT">ACT</option>
                            <option value="NT">Northern Territory</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">Destination</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 md:col-span-2">
                        <label htmlFor="destinationAddress" className="block text-sm font-medium text-gray-700 mb-1">Address Line</label>
                        <input type="text" id="destinationAddress" name="destinationAddress" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="destinationSuburb" className="block text-sm font-medium text-gray-700 mb-1">Suburb</label>
                        <input type="text" id="destinationSuburb" name="destinationSuburb" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="destinationPostcode" className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
                        <input type="text" id="destinationPostcode" name="destinationPostcode" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label htmlFor="destinationState" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                        <select id="destinationState" name="destinationState" required className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="NSW">New South Wales</option>
                            <option value="VIC">Victoria</option>
                            <option value="QLD">Queensland</option>
                            <option value="WA">Western Australia</option>
                            <option value="SA">South Australia</option>
                            <option value="TAS">Tasmania</option>
                            <option value="ACT">ACT</option>
                            <option value="NT">Northern Territory</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-700">Preferences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="distanceImportance" className="block text-sm font-medium text-gray-700 mb-1">How important is distance?</label>
                        <select id="distanceImportance" name="distanceImportance" required className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="1">Not Important</option>
                            <option value="2">Somewhat Important</option>
                            <option value="3">Important</option>
                            <option value="4">Very Important</option>
                            <option value="5">Extremely Important</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="timeImportance" className="block text-sm font-medium text-gray-700 mb-1">How important is travel time?</label>
                        <select id="timeImportance" name="timeImportance" required className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="1">Not Important</option>
                            <option value="2">Somewhat Important</option>
                            <option value="3">Important</option>
                            <option value="4">Very Important</option>
                            <option value="5">Extremely Important</option>
                        </select>
                    </div>
                </div>
            </div>

            <Button formId={formId} />
        </form>
    );
}
