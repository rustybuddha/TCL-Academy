

export async function createDeal(salesName, userData) {
    const url = "https://tclabs.myfreshworks.com/crm/sales/api/deals";

    const payload = {
        deal: {
            name: "Blockchain Mastery",
            amount: 8999,
            sales_account: {
                name: salesName,
            },
            "deal_pipeline_id": 402000189098,
            "custom_data": userData,
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
