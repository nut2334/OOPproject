import pandas as pd

with open ("count.js","w") as f:
    dataf1 = pd.read_csv('../csv/sample_submission.csv')
    dataf2 = pd.read_csv('../csv/train_image_level.csv')
    dataf3 = pd.read_csv('../csv/train_study_level.csv')
    col1 = 'PredictionString'
    col2 =dataf2['id'].tolist()
    col3 = ['Negative for Pneumonia', 'Typical Appearance', 'Indeterminate Appearance', 'Atypical Appearance']

    f.write("export const train={\n")

    f.write("total1:[\n")
    head = dataf1[col1].unique()
    data = dataf1.groupby([col1]).count()
    for k,j in enumerate(head):
        id=str(data['id'][k])
        f.write(" '"+ id +"' "+" , ")
    f.write("\n],")


    f.write("\ntotal2:[\n")
    k=0
    for i in col2:
        k+=1
    f.write(" '"+ str(k) +"' "+" , ")
    k=0
    k=len(dataf2)-dataf2['boxes'].count()
    f.write(" '"+ str(k) +"' "+" , ")
    f.write("\n],")


    f.write("\ntotal3:[\n")
    for i in col3:
            head = dataf3[i].unique()
            data = dataf3.groupby([i]).count()
            for k,j in enumerate(head):
                id=str(data['id'][k])
                f.write(" '"+ id +"' "+" , ")
    f.write("\n]")
    f.write("};")


    print('finish')