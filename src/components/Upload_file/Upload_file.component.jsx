import React from 'react'
import './Upload_file.style.css'
const Upload  = () => {
    return(
        <div className="upload-page-body">
            <br></br>
            <Upload_file/>
        
            
            <div className='text-title'>
            Tài liệu đang được xử lý
            </div>
            <File_item file_name='Software Engineering.pdf' status='Completed' file_type= 'pdf'/>
            <File_item  file_name='DB' status='Uncompleted' file_type= 'word'/>
            <File_item  file_name='CN' status='Canceled' file_type= 'ppt'/>
            
            
        </div>

    )
}

export default Upload

const Upload_file  = () => {
    return(
        <div className='upload-file'> 
            <img src="./image/icon/icon_upload.png" alt="Tải lên"/>
            <div className='upload-text'>Kéo thả file tại đây</div>
            <div className='upload-text'>-OR-</div>
            <label className='upload-file-button'> <input type='file' multiple="multiple"/> Tải lên file</label>
        </div>
    )
}
const File_table = () => {
    return(
        <div className='select-file-table'>

        </div>
        
    )  
}
const File_item=(
    {
        file_name='',
        status='',
        file_type=''
    }
)=>{
    return(
        <div className='select-file-line'> 
            <div className={'file-box-'+status}>  
                <img src={"./image/icon/icon_file_"+file_type+".png"} alt="PDF" width='30' height='35'/>
                <div className='file-info-box'> 
                    <div className='file-info'>
                        <div className='file-name'> {file_name} </div>
                        <div className='file-state'> {status}</div>
                    </div>
                    <div className='frame'> <div className={status+'-frame'}> </div></div>
                </div>
            </div>
            <div className='select-box'> 
            <div> Chọn tài liệu</div> 
            <div> <input type='radio' name='file' value={file_name}/> </div>
            
            </div>

        </div>
       

    )
}