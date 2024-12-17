export async function createContact(fullname, email, linkedin, address, mobile_number, profession, organization, referedBy, country) {
    const url = "https://tclabs.myfreshworks.com/crm/sales/api/contacts";

    // Split the fullname into first and last names
    const [first_name, ...lastNameParts] = fullname.split(" ");
    const last_name = lastNameParts.join(" ");

    console.log("error catch 1")

    const payload = {
        contact: {
            first_name: first_name,
            last_name: last_name,
            email: email,
            linkedin: linkedin,
            address: address,
            mobile_number: mobile_number,
            job_title: profession ,
            keyword: organization,
            medium: referedBy,
            country: country,
        },
    };

    console.log(payload)

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
        console.log("Response data:", data);

        // Return the created contact data
        return data.contact.id;
    } catch (error) {
        console.error("Error while creating the contact:", error);
    }
}

export async function createDeal(name, email, contactNumber, linkedIN, address, countryName, profession, organization, referedBy) {

    const contact_id = await createContact(name, email, linkedIN, address, contactNumber, profession, organization, referedBy, countryName)
    const url = "https://tclabs.myfreshworks.com/crm/sales/api/deals";

    const payload = {
        deal: {
            name: name,
            amount: 8999,
            sales_account: {
                name: email,
                phone: contactNumber,
                linkedin: linkedIN,
                address: address,
                country: countryName,
            },
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
        console.log("Response data:", data);

        // Return the deal ID from the response
        return data.deal.id;

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
        console.log("Response data:", data);

        // Return the updated deal data
        return data;
    } catch (error) {
        console.error("Error while updating the deal:", error);
    }
}
