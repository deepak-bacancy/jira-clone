import './Sidebar.css';

function Sidebar() {
  return (
    <div className="w-full h-full p-2 sidebar-design">
      <div className="flex flex-col">
        {/* first Section Start */}
        <div className="basis-1/2 mt-5 mb-5">
          <div className="flex">
            <div className="basis-1/12 flex items-center">
              <img
                alt="logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEX///8AAABDQ0N1dXVmZmbz8/O3t7dgYGDDw8NpaWmmpqb29va6urpYWFiCgoLq6uqOjo4fHx+goKALCwuUlJTd3d08PDw0NDQqKioaGhrLy8vV1dUkJCStra0RERFubm5QUFBMymDeAAADiUlEQVRoge2ZC7OyIBCGsdK8JaZ5g6z+/6/8lAVFXZNp5Jz5zvTOnJHDwpMty3KJkK9+Xu3RjhJOSOJYEyf22M7TJvz8A/DqsLMaDc72DsGnBvf3hgcLeLStNVg0e87hvDYZpBZD09JpuilD3IuTeyjcMASw4al6g0vIpX8WCNw3hKfIiyuGeGYIvDCEh0u468g3fvTPGHPL0YhdYWOaOf1cJyTuniXqc8LCbXnYeHbBEEK80TAmOHxP6fDdZ6gOT2NvV8UvDW5HX/ivwePI3VXRSYP/wGLxhf8aPA6pKg4pNPIyqXZMcrRdycDr8MP4P+uKh77gTuJXInlXvK/sB1bgXv9/BeVSoWZb4XR4C1gxjeGpqABfXPvijchlXZNwligd94df94fn8s+Bzcmu8EokoHjosCu8Zr7vs9QOXBe1CBfBbwteWIRD8w/goagQsxp2r9kCXpBP4bCVFhP8Joqxgle0BfjlY7jMUUlRyITiDnDlM0kUxadLpSIDOBzERvVb4wFOzlAZDvBRV24Ap9M+dAIn9Vg7gzvXaBs+PcCAZYTLj44RuBrot3CxRkzY4GvwNB848+DPXRM4iVLx7etkOF52y0Yt+/ariQgm2kzhsYHPgVYwVugVTFs6fWmJ+kw2iOrN/+DWAlTcLrny5uOSFTMzS8rB2fdnO98EvIXT8zzOAt2nfjU338zh3rzvtBF2Hq5MB7TF2GOsBbiZGsE53llNwduKtTSCS4c+gkTqlGvd1Q1EeVRmNVVvBvBYNtUiIJK51h+doh+66Qvq3sLhPPOSr6GlCpXJz5ErM9eYX0UfsW90WtddhR+bvNMDel/zPBjePXhcoTaXDsqbO1y88FL0aZS5xq+hkFvdk2Q/FxblmGhZzVF4uWwo4ShbpEbk8gq7hiLktWhXSzh+b5cR9PLKQ+HLhiqI2MLiqAuphccOKwNKw6y/aoKxS8LxaNSdfmBAqjCEKdRk6jjE+j4tfOtTmG1dQ0H3chKJtBo8AT5KdKty/fg2q3C1/KdcbUm4nENiDyMTT9UW0lr4J6h6kW242vosBaerw5rZaPVf636ZfrO59OvMd/l8GZUje+3ydHJofLsSIZ7Rch5FPnyKeL+G0mSyK7knk4WGsHGB7VXNb3g3V/+CxVJsvjx3crmvzJwurH9237If3OpPOVZ/hLKj/xf+tPljaxcmYXCyoiPfDqqvdtc/t1dAtKV6cDYAAAAASUVORK5CYII="
                className=""
                heigth={25}
                width={25}
              />
            </div>
            <div className="basis-4/5 ml-2 flex flex-col">
              <label className="p-0.5">EverWhere</label>
              <label className="pl-0.5 text-xs">Software Project</label>
            </div>
          </div>
        </div>
        {/* first Section end */}

        {/* second Section start */}

        <div className=" mt-5 mb-5">
          <div className="basis-4/5 mt-2 mb-2  flex flex-col">
            <label className="">Planning</label>
          </div>
          <div className="basis-1/2">
            <div className="flex">
              <div className="basis-1/12 flex items-center">
                <img
                  alt="logo"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEX///8AAABDQ0N1dXVmZmbz8/O3t7dgYGDDw8NpaWmmpqb29va6urpYWFiCgoLq6uqOjo4fHx+goKALCwuUlJTd3d08PDw0NDQqKioaGhrLy8vV1dUkJCStra0RERFubm5QUFBMymDeAAADiUlEQVRoge2ZC7OyIBCGsdK8JaZ5g6z+/6/8lAVFXZNp5Jz5zvTOnJHDwpMty3KJkK9+Xu3RjhJOSOJYEyf22M7TJvz8A/DqsLMaDc72DsGnBvf3hgcLeLStNVg0e87hvDYZpBZD09JpuilD3IuTeyjcMASw4al6g0vIpX8WCNw3hKfIiyuGeGYIvDCEh0u468g3fvTPGHPL0YhdYWOaOf1cJyTuniXqc8LCbXnYeHbBEEK80TAmOHxP6fDdZ6gOT2NvV8UvDW5HX/ivwePI3VXRSYP/wGLxhf8aPA6pKg4pNPIyqXZMcrRdycDr8MP4P+uKh77gTuJXInlXvK/sB1bgXv9/BeVSoWZb4XR4C1gxjeGpqABfXPvijchlXZNwligd94df94fn8s+Bzcmu8EokoHjosCu8Zr7vs9QOXBe1CBfBbwteWIRD8w/goagQsxp2r9kCXpBP4bCVFhP8Joqxgle0BfjlY7jMUUlRyITiDnDlM0kUxadLpSIDOBzERvVb4wFOzlAZDvBRV24Ap9M+dAIn9Vg7gzvXaBs+PcCAZYTLj44RuBrot3CxRkzY4GvwNB848+DPXRM4iVLx7etkOF52y0Yt+/ariQgm2kzhsYHPgVYwVugVTFs6fWmJ+kw2iOrN/+DWAlTcLrny5uOSFTMzS8rB2fdnO98EvIXT8zzOAt2nfjU338zh3rzvtBF2Hq5MB7TF2GOsBbiZGsE53llNwduKtTSCS4c+gkTqlGvd1Q1EeVRmNVVvBvBYNtUiIJK51h+doh+66Qvq3sLhPPOSr6GlCpXJz5ErM9eYX0UfsW90WtddhR+bvNMDel/zPBjePXhcoTaXDsqbO1y88FL0aZS5xq+hkFvdk2Q/FxblmGhZzVF4uWwo4ShbpEbk8gq7hiLktWhXSzh+b5cR9PLKQ+HLhiqI2MLiqAuphccOKwNKw6y/aoKxS8LxaNSdfmBAqjCEKdRk6jjE+j4tfOtTmG1dQ0H3chKJtBo8AT5KdKty/fg2q3C1/KdcbUm4nENiDyMTT9UW0lr4J6h6kW242vosBaerw5rZaPVf636ZfrO59OvMd/l8GZUje+3ydHJofLsSIZ7Rch5FPnyKeL+G0mSyK7knk4WGsHGB7VXNb3g3V/+CxVJsvjx3crmvzJwurH9237If3OpPOVZ/hLKj/xf+tPljaxcmYXCyoiPfDqqvdtc/t1dAtKV6cDYAAAAASUVORK5CYII="
                  className=""
                  heigth={25}
                  width={25}
                />
              </div>
              <div className="basis-4/5 ml-2 flex flex-col">
                <label className="p-0.5">Roadmap</label>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="flex">
              <div className="basis-1/12 flex items-center">
                <img
                  alt="logo"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEX///8AAABDQ0N1dXVmZmbz8/O3t7dgYGDDw8NpaWmmpqb29va6urpYWFiCgoLq6uqOjo4fHx+goKALCwuUlJTd3d08PDw0NDQqKioaGhrLy8vV1dUkJCStra0RERFubm5QUFBMymDeAAADiUlEQVRoge2ZC7OyIBCGsdK8JaZ5g6z+/6/8lAVFXZNp5Jz5zvTOnJHDwpMty3KJkK9+Xu3RjhJOSOJYEyf22M7TJvz8A/DqsLMaDc72DsGnBvf3hgcLeLStNVg0e87hvDYZpBZD09JpuilD3IuTeyjcMASw4al6g0vIpX8WCNw3hKfIiyuGeGYIvDCEh0u468g3fvTPGHPL0YhdYWOaOf1cJyTuniXqc8LCbXnYeHbBEEK80TAmOHxP6fDdZ6gOT2NvV8UvDW5HX/ivwePI3VXRSYP/wGLxhf8aPA6pKg4pNPIyqXZMcrRdycDr8MP4P+uKh77gTuJXInlXvK/sB1bgXv9/BeVSoWZb4XR4C1gxjeGpqABfXPvijchlXZNwligd94df94fn8s+Bzcmu8EokoHjosCu8Zr7vs9QOXBe1CBfBbwteWIRD8w/goagQsxp2r9kCXpBP4bCVFhP8Joqxgle0BfjlY7jMUUlRyITiDnDlM0kUxadLpSIDOBzERvVb4wFOzlAZDvBRV24Ap9M+dAIn9Vg7gzvXaBs+PcCAZYTLj44RuBrot3CxRkzY4GvwNB848+DPXRM4iVLx7etkOF52y0Yt+/ariQgm2kzhsYHPgVYwVugVTFs6fWmJ+kw2iOrN/+DWAlTcLrny5uOSFTMzS8rB2fdnO98EvIXT8zzOAt2nfjU338zh3rzvtBF2Hq5MB7TF2GOsBbiZGsE53llNwduKtTSCS4c+gkTqlGvd1Q1EeVRmNVVvBvBYNtUiIJK51h+doh+66Qvq3sLhPPOSr6GlCpXJz5ErM9eYX0UfsW90WtddhR+bvNMDel/zPBjePXhcoTaXDsqbO1y88FL0aZS5xq+hkFvdk2Q/FxblmGhZzVF4uWwo4ShbpEbk8gq7hiLktWhXSzh+b5cR9PLKQ+HLhiqI2MLiqAuphccOKwNKw6y/aoKxS8LxaNSdfmBAqjCEKdRk6jjE+j4tfOtTmG1dQ0H3chKJtBo8AT5KdKty/fg2q3C1/KdcbUm4nENiDyMTT9UW0lr4J6h6kW242vosBaerw5rZaPVf636ZfrO59OvMd/l8GZUje+3ydHJofLsSIZ7Rch5FPnyKeL+G0mSyK7knk4WGsHGB7VXNb3g3V/+CxVJsvjx3crmvzJwurH9237If3OpPOVZ/hLKj/xf+tPljaxcmYXCyoiPfDqqvdtc/t1dAtKV6cDYAAAAASUVORK5CYII="
                  className=""
                  heigth={25}
                  width={25}
                />
              </div>
              <div className="basis-4/5 ml-2 flex flex-col">
                <label className="p-0.5">Board</label>
              </div>
            </div>
          </div>

          <div className="basis-4/5 mt-2 mb-2 flex flex-col">
            <label className="">Developement</label>
          </div>

          <div className="basis-1/2">
            <div className="flex">
              <div className="basis-1/12 flex items-center">
                <img
                  alt="logo"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEX///8AAABDQ0N1dXVmZmbz8/O3t7dgYGDDw8NpaWmmpqb29va6urpYWFiCgoLq6uqOjo4fHx+goKALCwuUlJTd3d08PDw0NDQqKioaGhrLy8vV1dUkJCStra0RERFubm5QUFBMymDeAAADiUlEQVRoge2ZC7OyIBCGsdK8JaZ5g6z+/6/8lAVFXZNp5Jz5zvTOnJHDwpMty3KJkK9+Xu3RjhJOSOJYEyf22M7TJvz8A/DqsLMaDc72DsGnBvf3hgcLeLStNVg0e87hvDYZpBZD09JpuilD3IuTeyjcMASw4al6g0vIpX8WCNw3hKfIiyuGeGYIvDCEh0u468g3fvTPGHPL0YhdYWOaOf1cJyTuniXqc8LCbXnYeHbBEEK80TAmOHxP6fDdZ6gOT2NvV8UvDW5HX/ivwePI3VXRSYP/wGLxhf8aPA6pKg4pNPIyqXZMcrRdycDr8MP4P+uKh77gTuJXInlXvK/sB1bgXv9/BeVSoWZb4XR4C1gxjeGpqABfXPvijchlXZNwligd94df94fn8s+Bzcmu8EokoHjosCu8Zr7vs9QOXBe1CBfBbwteWIRD8w/goagQsxp2r9kCXpBP4bCVFhP8Joqxgle0BfjlY7jMUUlRyITiDnDlM0kUxadLpSIDOBzERvVb4wFOzlAZDvBRV24Ap9M+dAIn9Vg7gzvXaBs+PcCAZYTLj44RuBrot3CxRkzY4GvwNB848+DPXRM4iVLx7etkOF52y0Yt+/ariQgm2kzhsYHPgVYwVugVTFs6fWmJ+kw2iOrN/+DWAlTcLrny5uOSFTMzS8rB2fdnO98EvIXT8zzOAt2nfjU338zh3rzvtBF2Hq5MB7TF2GOsBbiZGsE53llNwduKtTSCS4c+gkTqlGvd1Q1EeVRmNVVvBvBYNtUiIJK51h+doh+66Qvq3sLhPPOSr6GlCpXJz5ErM9eYX0UfsW90WtddhR+bvNMDel/zPBjePXhcoTaXDsqbO1y88FL0aZS5xq+hkFvdk2Q/FxblmGhZzVF4uWwo4ShbpEbk8gq7hiLktWhXSzh+b5cR9PLKQ+HLhiqI2MLiqAuphccOKwNKw6y/aoKxS8LxaNSdfmBAqjCEKdRk6jjE+j4tfOtTmG1dQ0H3chKJtBo8AT5KdKty/fg2q3C1/KdcbUm4nENiDyMTT9UW0lr4J6h6kW242vosBaerw5rZaPVf636ZfrO59OvMd/l8GZUje+3ydHJofLsSIZ7Rch5FPnyKeL+G0mSyK7knk4WGsHGB7VXNb3g3V/+CxVJsvjx3crmvzJwurH9237If3OpPOVZ/hLKj/xf+tPljaxcmYXCyoiPfDqqvdtc/t1dAtKV6cDYAAAAASUVORK5CYII="
                  className=""
                  heigth={25}
                  width={25}
                />
              </div>
              <div className="basis-4/5 ml-2 flex flex-col">
                <label className="p-0.5">Roadmap</label>
              </div>
            </div>
          </div>
        </div>

        {/* second Section end */}

        <hr className="mr-2 mr-2 side-hr" />

        {/* third Section start */}
        <div className="basis-1/2 ml-2 mt-5 mb-5">
          <div className="flex mb-2">
            <div className="basis-1/12 flex items-center">
              <img
                alt="logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEX///8AAABDQ0N1dXVmZmbz8/O3t7dgYGDDw8NpaWmmpqb29va6urpYWFiCgoLq6uqOjo4fHx+goKALCwuUlJTd3d08PDw0NDQqKioaGhrLy8vV1dUkJCStra0RERFubm5QUFBMymDeAAADiUlEQVRoge2ZC7OyIBCGsdK8JaZ5g6z+/6/8lAVFXZNp5Jz5zvTOnJHDwpMty3KJkK9+Xu3RjhJOSOJYEyf22M7TJvz8A/DqsLMaDc72DsGnBvf3hgcLeLStNVg0e87hvDYZpBZD09JpuilD3IuTeyjcMASw4al6g0vIpX8WCNw3hKfIiyuGeGYIvDCEh0u468g3fvTPGHPL0YhdYWOaOf1cJyTuniXqc8LCbXnYeHbBEEK80TAmOHxP6fDdZ6gOT2NvV8UvDW5HX/ivwePI3VXRSYP/wGLxhf8aPA6pKg4pNPIyqXZMcrRdycDr8MP4P+uKh77gTuJXInlXvK/sB1bgXv9/BeVSoWZb4XR4C1gxjeGpqABfXPvijchlXZNwligd94df94fn8s+Bzcmu8EokoHjosCu8Zr7vs9QOXBe1CBfBbwteWIRD8w/goagQsxp2r9kCXpBP4bCVFhP8Joqxgle0BfjlY7jMUUlRyITiDnDlM0kUxadLpSIDOBzERvVb4wFOzlAZDvBRV24Ap9M+dAIn9Vg7gzvXaBs+PcCAZYTLj44RuBrot3CxRkzY4GvwNB848+DPXRM4iVLx7etkOF52y0Yt+/ariQgm2kzhsYHPgVYwVugVTFs6fWmJ+kw2iOrN/+DWAlTcLrny5uOSFTMzS8rB2fdnO98EvIXT8zzOAt2nfjU338zh3rzvtBF2Hq5MB7TF2GOsBbiZGsE53llNwduKtTSCS4c+gkTqlGvd1Q1EeVRmNVVvBvBYNtUiIJK51h+doh+66Qvq3sLhPPOSr6GlCpXJz5ErM9eYX0UfsW90WtddhR+bvNMDel/zPBjePXhcoTaXDsqbO1y88FL0aZS5xq+hkFvdk2Q/FxblmGhZzVF4uWwo4ShbpEbk8gq7hiLktWhXSzh+b5cR9PLKQ+HLhiqI2MLiqAuphccOKwNKw6y/aoKxS8LxaNSdfmBAqjCEKdRk6jjE+j4tfOtTmG1dQ0H3chKJtBo8AT5KdKty/fg2q3C1/KdcbUm4nENiDyMTT9UW0lr4J6h6kW242vosBaerw5rZaPVf636ZfrO59OvMd/l8GZUje+3ydHJofLsSIZ7Rch5FPnyKeL+G0mSyK7knk4WGsHGB7VXNb3g3V/+CxVJsvjx3crmvzJwurH9237If3OpPOVZ/hLKj/xf+tPljaxcmYXCyoiPfDqqvdtc/t1dAtKV6cDYAAAAASUVORK5CYII="
                className=""
                heigth={25}
                width={25}
              />
            </div>
            <div className="basis-4/5 ml-2 flex flex-col">
              <label className="p-0.5">Project pages</label>
            </div>
          </div>

          <div className="flex mb-2">
            <div className="basis-1/12 flex items-center">
              <img
                alt="logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEX///8AAABDQ0N1dXVmZmbz8/O3t7dgYGDDw8NpaWmmpqb29va6urpYWFiCgoLq6uqOjo4fHx+goKALCwuUlJTd3d08PDw0NDQqKioaGhrLy8vV1dUkJCStra0RERFubm5QUFBMymDeAAADiUlEQVRoge2ZC7OyIBCGsdK8JaZ5g6z+/6/8lAVFXZNp5Jz5zvTOnJHDwpMty3KJkK9+Xu3RjhJOSOJYEyf22M7TJvz8A/DqsLMaDc72DsGnBvf3hgcLeLStNVg0e87hvDYZpBZD09JpuilD3IuTeyjcMASw4al6g0vIpX8WCNw3hKfIiyuGeGYIvDCEh0u468g3fvTPGHPL0YhdYWOaOf1cJyTuniXqc8LCbXnYeHbBEEK80TAmOHxP6fDdZ6gOT2NvV8UvDW5HX/ivwePI3VXRSYP/wGLxhf8aPA6pKg4pNPIyqXZMcrRdycDr8MP4P+uKh77gTuJXInlXvK/sB1bgXv9/BeVSoWZb4XR4C1gxjeGpqABfXPvijchlXZNwligd94df94fn8s+Bzcmu8EokoHjosCu8Zr7vs9QOXBe1CBfBbwteWIRD8w/goagQsxp2r9kCXpBP4bCVFhP8Joqxgle0BfjlY7jMUUlRyITiDnDlM0kUxadLpSIDOBzERvVb4wFOzlAZDvBRV24Ap9M+dAIn9Vg7gzvXaBs+PcCAZYTLj44RuBrot3CxRkzY4GvwNB848+DPXRM4iVLx7etkOF52y0Yt+/ariQgm2kzhsYHPgVYwVugVTFs6fWmJ+kw2iOrN/+DWAlTcLrny5uOSFTMzS8rB2fdnO98EvIXT8zzOAt2nfjU338zh3rzvtBF2Hq5MB7TF2GOsBbiZGsE53llNwduKtTSCS4c+gkTqlGvd1Q1EeVRmNVVvBvBYNtUiIJK51h+doh+66Qvq3sLhPPOSr6GlCpXJz5ErM9eYX0UfsW90WtddhR+bvNMDel/zPBjePXhcoTaXDsqbO1y88FL0aZS5xq+hkFvdk2Q/FxblmGhZzVF4uWwo4ShbpEbk8gq7hiLktWhXSzh+b5cR9PLKQ+HLhiqI2MLiqAuphccOKwNKw6y/aoKxS8LxaNSdfmBAqjCEKdRk6jjE+j4tfOtTmG1dQ0H3chKJtBo8AT5KdKty/fg2q3C1/KdcbUm4nENiDyMTT9UW0lr4J6h6kW242vosBaerw5rZaPVf636ZfrO59OvMd/l8GZUje+3ydHJofLsSIZ7Rch5FPnyKeL+G0mSyK7knk4WGsHGB7VXNb3g3V/+CxVJsvjx3crmvzJwurH9237If3OpPOVZ/hLKj/xf+tPljaxcmYXCyoiPfDqqvdtc/t1dAtKV6cDYAAAAASUVORK5CYII="
                className=""
                heigth={25}
                width={25}
              />
            </div>
            <div className="basis-4/5 ml-2 flex flex-col">
              <label className="p-0.5">Add shortcut</label>
            </div>
          </div>

          <div className="flex mb-2">
            <div className="basis-1/12 flex items-center">
              <img
                alt="logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEX///8AAABDQ0N1dXVmZmbz8/O3t7dgYGDDw8NpaWmmpqb29va6urpYWFiCgoLq6uqOjo4fHx+goKALCwuUlJTd3d08PDw0NDQqKioaGhrLy8vV1dUkJCStra0RERFubm5QUFBMymDeAAADiUlEQVRoge2ZC7OyIBCGsdK8JaZ5g6z+/6/8lAVFXZNp5Jz5zvTOnJHDwpMty3KJkK9+Xu3RjhJOSOJYEyf22M7TJvz8A/DqsLMaDc72DsGnBvf3hgcLeLStNVg0e87hvDYZpBZD09JpuilD3IuTeyjcMASw4al6g0vIpX8WCNw3hKfIiyuGeGYIvDCEh0u468g3fvTPGHPL0YhdYWOaOf1cJyTuniXqc8LCbXnYeHbBEEK80TAmOHxP6fDdZ6gOT2NvV8UvDW5HX/ivwePI3VXRSYP/wGLxhf8aPA6pKg4pNPIyqXZMcrRdycDr8MP4P+uKh77gTuJXInlXvK/sB1bgXv9/BeVSoWZb4XR4C1gxjeGpqABfXPvijchlXZNwligd94df94fn8s+Bzcmu8EokoHjosCu8Zr7vs9QOXBe1CBfBbwteWIRD8w/goagQsxp2r9kCXpBP4bCVFhP8Joqxgle0BfjlY7jMUUlRyITiDnDlM0kUxadLpSIDOBzERvVb4wFOzlAZDvBRV24Ap9M+dAIn9Vg7gzvXaBs+PcCAZYTLj44RuBrot3CxRkzY4GvwNB848+DPXRM4iVLx7etkOF52y0Yt+/ariQgm2kzhsYHPgVYwVugVTFs6fWmJ+kw2iOrN/+DWAlTcLrny5uOSFTMzS8rB2fdnO98EvIXT8zzOAt2nfjU338zh3rzvtBF2Hq5MB7TF2GOsBbiZGsE53llNwduKtTSCS4c+gkTqlGvd1Q1EeVRmNVVvBvBYNtUiIJK51h+doh+66Qvq3sLhPPOSr6GlCpXJz5ErM9eYX0UfsW90WtddhR+bvNMDel/zPBjePXhcoTaXDsqbO1y88FL0aZS5xq+hkFvdk2Q/FxblmGhZzVF4uWwo4ShbpEbk8gq7hiLktWhXSzh+b5cR9PLKQ+HLhiqI2MLiqAuphccOKwNKw6y/aoKxS8LxaNSdfmBAqjCEKdRk6jjE+j4tfOtTmG1dQ0H3chKJtBo8AT5KdKty/fg2q3C1/KdcbUm4nENiDyMTT9UW0lr4J6h6kW242vosBaerw5rZaPVf636ZfrO59OvMd/l8GZUje+3ydHJofLsSIZ7Rch5FPnyKeL+G0mSyK7knk4WGsHGB7VXNb3g3V/+CxVJsvjx3crmvzJwurH9237If3OpPOVZ/hLKj/xf+tPljaxcmYXCyoiPfDqqvdtc/t1dAtKV6cDYAAAAASUVORK5CYII="
                className=""
                heigth={25}
                width={25}
              />
            </div>
            <div className="basis-4/5 ml-2 flex flex-col">
              <label className="p-0.5">Project settings</label>
            </div>
          </div>
        </div>
        {/* third Section end */}
      </div>
    </div>
  );
}

export default Sidebar;
