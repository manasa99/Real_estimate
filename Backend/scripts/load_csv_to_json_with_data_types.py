import csv
import json

result = []
src = r'C:\Users\Asus\Downloads\realtor-data.csv\realtor-data.csv'
dest = r'C:\Users\Asus\Desktop\realtor-data-tmp-py.json'
f = open(dest, "w+")

with open(src, encoding='utf-8') as csvf:
    csvReader = csv.DictReader(csvf)
    # Convert each row into a dictionary
    # and add it to data
    for rows in csvReader:
        rows["status"] = True if rows["status"] == 'for_sale' else False
        rows['price'] = float(rows["price"]) if rows["price"] != "" else 0.0
        rows["bed"] = float(rows["bed"]) if rows["bed"] != "" else 0.0
        rows['bath'] = float(rows["bath"]) if rows["bath"] != "" else 0.0
        rows['acre_lot'] = float(rows['acre_lot']) if rows['acre_lot'] != "" else 0.0
        rows["full_address"] = str(rows["full_address"]) if rows["full_address"] != "" else "unknown"
        rows['street'] = str(rows['street']) if rows['street'] != "" else "unknown"
        rows["city"] = rows["city"] if rows['city'] != "" else "unknown"
        rows['state'] = rows['state'] if rows['state'] != "" else "unknown"
        rows["zip_code"] = int(float(rows["zip_code"])) if rows["zip_code"] != "" else 0
        rows['house_size'] = float(rows['house_size']) if rows['house_size'] != "" else 0.0
        rows['sold_date'] = rows["sold_date"] if rows["sold_date"] != "" else "1/1/1900"
        rows["added_by"] = "admin"
        result.append(rows)

json.dump(result, f)
