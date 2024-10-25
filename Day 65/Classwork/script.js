//შექმენით ობიექტი და გადაეცით 5 თვისება/მნიშვნელობა, მაგის შემდეგ შეცვალეთ მეორე თვისების მნიშვნელობა და ასევე ამოშალეთ მეოთხე და მეხუთე თვისება და მნიშვნელობა

const user = {
    name  : 'gio',
    familyname : 'chaganava',
    city : 'Rustavi',
    country : "Georgia",
    bdate : "03/08/2010"
}

user.name = "niko";

delete user.county;
delete user.bdate;