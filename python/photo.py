from flask import Flask, request
import numpy as np
import pydicom
from PIL import Image

app = Flask(__name__)

@app.route('/api')
def JPG():
    name = request.args['img'] #req=รับค่า
    im = pydicom.dcmread(name)
    im = im.pixel_array.astype(float)
    rescaled_image = (np.maximum(im,0)/im.max())*255
    final_image = np.uint8(rescaled_image)
    final_image = Image.fromarray(final_image)
    final_image.save('../backend/image/photo.jpg')
    return name

if __name__ == "__main__":
    app.run(debug=True,port=1150)