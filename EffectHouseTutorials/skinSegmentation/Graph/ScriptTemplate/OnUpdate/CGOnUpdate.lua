local CGOnUpdate = CGOnUpdate or {}
CGOnUpdate.__index = CGOnUpdate

function CGOnUpdate.new()
    local self = setmetatable({}, CGOnUpdate)
    self.outputs = {}
    self.nexts = {}
    return self
end

function CGOnUpdate:setNext(index, func)
    self.nexts[index] = func
end

function CGOnUpdate:getOutput(index)
    return self.outputs[index]
end

function CGOnUpdate:update(sys, deltaTime)
    self.outputs[1] = deltaTime
    if self.nexts[0] then
        self.nexts[0]()
    end
end

return CGOnUpdate
