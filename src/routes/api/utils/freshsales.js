export async function createContact(fullname, email, linkedin, address, mobile_number, profession, organization, referedBy, country) {
    const url = "https://tclabs.myfreshworks.com/crm/sales/api/contacts/upsert";

    // Split the fullname into first and last names
    const [first_name, ...lastNameParts] = fullname.split(" ");
    const last_name = lastNameParts.join(" ");


    const payload = {
        "unique_identifier":{
            "emails": email,
        },
        contact: {
            first_name: first_name,
            last_name: last_name,
            linkedin: linkedin,
            address: address,
            mobile_number: mobile_number,
            job_title: profession ,
            keyword: organization,
            medium: referedBy,
            country: country,
        },
    };

    // console.log(payload)
    // console.log(JSON.stringify(payload))


    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": "Token token=t6MwZk-wEKklzOlJmcIWGA",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // console.log("Response data:", data);

        // Return the created contact data
        return data.contact.id;
    } catch (error) {
        console.error("Error while creating the contact:", error);
    }
}

export async function createDeal(name, email, contactNumber, linkedIN, address, countryName, profession, organization, referedBy, sales_account_id) {

    const contact_id = await createContact(name, email, linkedIN, address, contactNumber, profession, organization, referedBy, countryName)
    const url = "https://tclabs.myfreshworks.com/crm/sales/api/deals";

    const payload = {
        deal: {
            name: name,
            amount: 8999,
            "sales_account_id": sales_account_id,
            "currency_id": 402000190124,
            "deal_pipeline_id": 402000189098,
            "contacts_added_list": [contact_id],
            "products": [
                {
                    "id": 402000768605,
                    "quantity": 1,
                    "unit_price": 8999
                }
            ]
        },
    };

    console.log(JSON.stringify(payload))

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": "Token token=t6MwZk-wEKklzOlJmcIWGA",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // console.log("Response data:", data);

        // Return the deal ID from the response
        return { contact_id, deal_id: data.deal.id };

    } catch (error) {
        console.error("Error while calling the API:", error);
    }
}

export async function updateDeal(dealId) {
    const url = `https://tclabs.myfreshworks.com/crm/sales/api/deals/${dealId}`;

    const payload = {
        deal: {
            "deal_stage_id": 402001325531,
        },
    };

    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Authorization": "Token token=t6MwZk-wEKklzOlJmcIWGA",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // console.log("Response data:", data);

        // Return the updated deal data
        return data;
    } catch (error) {
        console.error("Error while updating the deal:", error);
    }
}
export async function updateDealSales(dealId, accountId) {
    const url = `https://tclabs.myfreshworks.com/crm/sales/api/deals/${dealId}`;

    const payload = {
        deal: {
            "sales_account_id": accountId,
        },
    };

    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Authorization": "Token token=t6MwZk-wEKklzOlJmcIWGA",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // console.log("Response data:", data);

        // Return the updated deal data
        return data;
    } catch (error) {
        console.error("Error while updating the deal:", error);
    }
}


export async function updateContact(contactId, fullname, linkedin, address, mobile_number, profession, organization, referedBy, country) {
    const url = `https://tclabs.myfreshworks.com/crm/sales/api/contacts/${contactId}`;

    const [first_name, ...lastNameParts] = fullname.split(" ");
    const last_name = lastNameParts.join(" ");

    // Construct the payload
    const payload = {
        contact: {
            first_name: first_name,
            last_name: last_name,
            linkedin: linkedin,
            address: address,
            mobile_number: mobile_number,
            job_title: profession ,
            keyword: organization,
            medium: referedBy,
            country: country,
        }
    };

    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Authorization": "Token t6MwZk-wEKklzOlJmcIWGA", // Replace with your API token
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload) // Convert JS object to JSON string
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        // Parse and return the response data
        const data = await response.json();
        // console.log("Contact updated successfully:", data);
        return data;
    } catch (error) {
        console.error("Error updating contact:", error.message);
        return null;
    }
}

export async function createSalesAccount(organization) {
    const url = "https://tclabs.myfreshworks.com/crm/sales/api/sales_accounts";

    const payload = {
        sales_account: {
            name: organization
        }
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": "Token t6MwZk-wEKklzOlJmcIWGA",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response:", data);
        return data.sales_account.id;
        
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

